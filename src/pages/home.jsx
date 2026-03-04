import { useState } from "react";
import { Link } from 'react-router-dom';

import {
    RedirectToSignIn,
    SignedIn,
    UserButton,
} from '@neondatabase/neon-js/auth/react/ui';

const ROUTINE_STORAGE_KEY = "plat_routine_list";

function Home() {
    const [routineList] = useState(() => {
        try {
            const savedRoutine = localStorage.getItem(ROUTINE_STORAGE_KEY);
            return savedRoutine ? JSON.parse(savedRoutine) : [];
        } catch {
            return [];
        }
    });

    return (
        <>
            <SignedIn>
                <div className="text-center">
                    <h1>Welcome to your personalized training platform</h1> <UserButton />

                    <div className="card mt-4">
                        <div className="card-body">
                            <p className="card-text">Here you can see your last routine and add a new one.</p>
                            {routineList.length > 0 ? (
                                <table className="table_exercises">
                                    <thead>
                                        <tr>
                                            <th>Exercise</th>
                                            <th>Reps</th>
                                            <th>Focus</th>
                                            <th>Extra weight (kg)</th>
                                            <th>Set volume (kg)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {routineList.map((routineItem, index) => (
                                            <tr key={`${routineItem.exercise}-${index}`}>
                                                <td>{routineItem.exercise}</td>
                                                <td>{routineItem.reps}</td>
                                                <td>{routineItem.focus}</td>
                                                <td>{routineItem.extra_weight}</td>
                                                <td>{routineItem.set_volume}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <p>No routines added yet.</p>
                            )}
                            <p className="card-text">Total volume(kg): {routineList.reduce((sum, item) => sum + item.set_volume, 0)}</p>
                        </div>
                    </div>
                    <Link to="/new-session">
                        <button className="btn btn-primary mt-3">+ session</button>
                    </Link>
                </div>
            </SignedIn>
            <RedirectToSignIn />
        </>
    );
}

export default Home;
