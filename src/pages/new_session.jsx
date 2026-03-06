import { useEffect, useState } from "react";

const ROUTINE_STORAGE_KEY = "plat_routine_list";

export const bodyweight = 70; // Example bodyweight in kg, you can make this dynamic based on user input or profile data
function SetVolume(bodyweight, extraWeight, reps, focus) {
    let FC = 0.0; 
    let Volume = 0.0;
    switch (focus) {
        case "vertical_pull":
        case "vertical_push":
            FC = 1.0;
            break;
        case "horizontal_pull":
        case "horizontal_push":
            FC = 0.6;
            break;
        case "core":
        case "legs":
            FC = 0.0;
            break;
        default:
            FC = 0.0;
    }
    Volume = reps * (bodyweight * FC + extraWeight);
    return Volume;
};

function computeXP(Difficult) {
    
    switch (Difficult) {
        case "Easy":
            return 20;
        case "Moderate":
            return 40;
        case "Hard":
            return 60;
        case "Very_Hard":
            return 80;
        case "Elite":
            return 100;
        default:
            return 0;
    }
}

function New_Session() {
    const [selectExercise, setSelectedExercise] = useState("");
    const [reps, setReps] = useState(10);
    const [extraWeight, setExtraWeight] = useState(0);

    const exercises = [
        "Pull ups",
        "Inverted rows",
        "Chin ups",
        "High Pull ups",
        "Muscle ups",
        "Front lever pull ups",
        "Dips",
        "Push ups",
        "Pike Push ups",
        "Archer Push ups",
        "Handstand Push ups",
        "Planche Push ups",
        "Dragonflag",
        "Ab wheel",
        "Toes to bar",
        "Squats",
        "Lunges",
        "Bulgarian Squats",
        "Pistol Squats",
        "Dragon Squats"
    ];

    const handleFocus = (exercise) => {
        const focusMap = {
            vertical_pull: ["Pull ups", "Chin ups", "High Pull ups", "Muscle ups"],
            vertical_push: ["Dips", "Handstand Push ups"],
            horizontal_pull: ["Inverted rows", "Front lever pull ups"],
            horizontal_push: ["Push ups", "Pike Push ups", "Archer Push ups", "Planche Push ups"],
            core: ["Ab wheel", "Leg raises", "Crunches", "Toes to bar", "Dragonflag"],
            legs: ["Squats", "Lunges", "Bulgarian Squats", "Pistol Squats", "Dragon Squats"]
        };

        for (const [focus, exerciseList] of Object.entries(focusMap)) {
            if (exerciseList.includes(exercise)) {
                return focus;
            }
        }

        return "";
    };

    const handleDifficult = (exercise) => {

        const difficultMap = {
            Easy : ["Inverted rows", "Ab wheel", "Squats", "Lunges", "Chin ups", "Push ups", "Crunches"],
            Moderate : ["Bulgarian squats", "Pull ups", "Pike push ups", "Leg raises", "Dips"],
            Hard : ["High Pull ups", "Archer Push ups", "Toes to bar", "Dragonflag", "Pistol Squats"],
            Very_Hard : ["Muscle Ups", "Dragon squats", "Handstand Push ups"],
            Elite : ["Front lever pull ups", "Planche Push ups"]	
        };

        for (const [difficult, exerciseList] of Object.entries(difficultMap)) {
            if (exerciseList.includes(exercise)) {
                return difficult;
            }
        }

        return "";
    };

    const [routineList, setRoutineList] = useState(() => {
        try {
            const savedRoutine = localStorage.getItem(ROUTINE_STORAGE_KEY);
            return savedRoutine ? JSON.parse(savedRoutine) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(ROUTINE_STORAGE_KEY, JSON.stringify(routineList));
    }, [routineList]);

    const handleExerciseChange = (event) => {
        setSelectedExercise(event.target.value);
    };

    const handleRepsChange = (event) => {
        setReps(Number(event.target.value) || 0);
    };

    const handleExtraWeightChange = (event) => {
        setExtraWeight(Number(event.target.value) || 0);
    };

    const uploadExercise = () => {
        if (!selectExercise) return;
        const routine = {
            exercise: selectExercise,
            reps,
            extra_weight: extraWeight,
            focus: handleFocus(selectExercise),
            set_volume: SetVolume(bodyweight, extraWeight, reps, handleFocus(selectExercise)),
            set_XP : computeXP(handleDifficult(selectExercise))
        };
        setRoutineList([...routineList, routine]);
    };

    const submitRoutine = () => {
        localStorage.setItem(ROUTINE_STORAGE_KEY, JSON.stringify(routineList));
    };

    return (
        <div className="text-center">
            <h1>Add your current routine</h1>
            <div className="card mt-4">
                <div className="card-body">
                    <form>
                        <div className="dropdown mb-5">
                            <select className="form-select" value={selectExercise} onChange={handleExerciseChange}>
                                <option value="" disabled>Select an exercise</option>
                                {exercises.map((exercise, index) => (
                                    <option key={index} value={exercise}>{exercise}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="reps" className="form-label">Reps</label>
                            <input type="number" className="form-control" max="20" min="1" 
                            id="reps" placeholder="It's recommended to do 1-20 reps"
                            value={reps} onChange={handleRepsChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="weigthed" className="form-label">Extra weight (kg)</label>
                            <input type="number" className="form-control" max="100" min="0" 
                            id="extra_weight" placeholder="Add if you using extra weights (bags, dumbells, ...) in kg, else leave it as 0"
                            value={extraWeight} onChange={handleExtraWeightChange} />
                        </div>

                    </form>
                    <button className="btn btn-primary mt-3" onClick={uploadExercise}>Add exercise</button>
                    <span className="mx-5"></span>
                    <button className="btn btn-primary mt-3" onClick={submitRoutine}>Submit</button>
                    <span className="mx-5"></span>
                    <button className="btn btn-primary mt-3" onClick={() => setRoutineList([])}>Clean</button>
                    <span className="mx-5"></span>
                    <button className="btn btn-primary mt-3" onClick={() => setRoutineList(routineList.slice(0, -1))}>
                        Delete last</button>
                </div>
            </div>
            <div className="card mt-4">
                <div className="card-body">
                    <p className="card-text">Routine to upload</p>
                    <table className="table_exercises">
                        <thead>
                            <tr>
                                <th className="text-center">Exercise</th>
                                <th className="text-center">Reps</th>
                                <th className="text-center">Focus</th>
                                <th className="text-center">Extra weight (kg)</th>
                                <th className="text-center">Set volume (kg)</th>
                                <th className="text-center">XP</th>
                            </tr>
                        </thead>
                        <tbody>
                            {routineList.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="empty-row">No exercises added yet.</td>
                                </tr>
                            ) : (
                                routineList.map((routineItem, index) => (
                                    <tr key={`${routineItem.exercise}-${index}`}>
                                        <td className="text-center">{routineItem.exercise}</td>
                                        <td className="text-center">{routineItem.reps}</td>
                                        <td className="text-center">{routineItem.focus}</td>
                                        <td className="text-center">{routineItem.extra_weight}</td>
                                        <td className="text-center">{routineItem.set_volume}</td>
                                        <td className="text-center">{routineItem.set_XP}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default New_Session;
