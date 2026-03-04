function push() {
    return(
        <div className="card mt-4">
            <div className="card-body">
                <h1> Push exercises </h1>
                <table className="table_exercises">
                    <thead>
                        <tr>
                            <th>Push ups</th>
                            <th>Pike push ups</th>
                            <th>Dips</th>
                            <th>Archer push ups</th>
                            <th>Handstand push ups</th>
                            <th>Planche push ups</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="../src/assets/exercises/push/push_ups.jpeg" alt="push ups" className="card-img" height = "20%" width = "5%"/></td>
                            <td><img src="../src/assets/exercises/push/pike_push_ups.jpg" alt="pike push ups" className="card-img" height = "20%" width = "5%"/></td>
                            <td><img src="../src/assets/exercises/push/dip.jpg" alt="dips" className="card-img" height = "20%" width = "5%"/></td>
                            <td><img src="../src/assets/exercises/push/archer_push_ups.jpeg" alt="archer push ups" className="card-img" height = "20%" width = "5%"/></td>
                            <td><img src="../src/assets/exercises/push/handstand_push_ups.jpg" alt="handstand push ups" className="card-img" height = "20%" width = "5%"/></td>
                            <td><img src="../src/assets/exercises/push/planche_push_ups.jpg" alt="planche push ups" className="card-img" height = "20%" width = "5%"/></td>
                        </tr>
                        <tr>
                            <td><b>Difficult:</b> Easy</td>
                            <td><b>Difficult:</b> Normal</td>
                            <td><b>Difficult:</b> Intermediate</td>
                            <td><b>Difficult:</b> Hard</td>
                            <td><b>Difficult:</b> Very hard</td>
                            <td><b>Difficult:</b> Insane</td>
                        </tr>
                        <tr>
                            <td>
                                <li className="tips-list">A foundational horizontal press that develops chest, shoulders, triceps, and core control.</li>
                                <li className="tips-list">Keep your body in a straight line and avoid letting your hips sag.</li>
                                <li className="tips-list">Lower with control until your chest is close to the floor.</li>
                                <li className="tips-list">Press through your palms while keeping your elbows at a comfortable angle.</li>
                            </td>
                            <td>
                                <li className="tips-list">A shoulder-dominant pushing variation that prepares you for handstand pressing strength.</li>
                                <li className="tips-list">Raise your hips high so your torso stays more vertical.</li>
                                <li className="tips-list">Aim your head slightly forward to create a natural pressing path.</li>
                                <li className="tips-list">Use elevated feet if regular reps become too easy.</li>
                            </td>
                            <td>
                                <li className="tips-list">A compound pushing exercise that heavily targets the chest, triceps, and front delts.</li>
                                <li className="tips-list">Keep your shoulders down and back instead of collapsing at the bottom.</li>
                                <li className="tips-list">Lean slightly forward if you want more chest involvement.</li>
                                <li className="tips-list">Only go as deep as your shoulders can control without pain.</li>
                            </td>
                            <td>
                                <li className="tips-list">A unilateral-style push-up that shifts more load to one side and builds pressing asymmetry strength.</li>
                                <li className="tips-list">Move slowly and keep most of your weight over the bent arm.</li>
                                <li className="tips-list">Let the straight arm assist with balance rather than pushing hard.</li>
                                <li className="tips-list">Use a wider stance with your feet for better stability.</li>
                            </td>
                            <td>
                                <li className="tips-list">A vertical press performed upside down that demands balance, shoulder strength, and body control.</li>
                                <li className="tips-list">Stack your wrists, shoulders, hips, and feet as much as possible.</li>
                                <li className="tips-list">Use wall-assisted reps first to focus on strength before free balance.</li>
                                <li className="tips-list">Keep your core and glutes tight so the line stays stable.</li>
                            </td>
                            <td>
                                <li className="tips-list">An elite horizontal press variation requiring planche lean strength, protracted shoulders, and rigid-body tension.</li>
                                <li className="tips-list">Train planche leans and tuck planche holds before full push-up attempts.</li>
                                <li className="tips-list">Push the floor away hard to keep your scapula protracted.</li>
                                <li className="tips-list">Reduce the lever with bands or progressions if your hips drop.</li>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default push;
