function core() {
    return(
        <div className="card mt-4">
            <div className="card-body">
                <h1> Core exercises </h1>
                <table className="table_exercises">
                    <thead>
                        <tr>
                            <th>Ab wheel</th>
                            <th>Dragonflags</th>
                            <th>Toes to bar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="../src/assets/exercises/core/ab_wheel.jpg" alt="ab wheel" className="card-img" height = "20%" width = "5%"/></td>
                            <td><img src="../src/assets/exercises/core/dragonflag.jpg" alt="dragonflags" className="card-img" height = "20%" width = "5%"/></td>
                            <td><img src="../src/assets/exercises/core/toes_bar.jpg" alt="toes to bar" className="card-img" height = "20%" width = "5%"/></td>
                        </tr>
                        <tr>
                            <td><b>Difficult:</b> Normal </td>
                            <td><b>Difficult:</b> Intermediate </td>
                            <td><b>Difficult:</b> Intermediate </td>
                        </tr>
                        <tr>
                            <td>
                                <li className="tips-list">A rollout-based anti-extension exercise that builds deep core tension and shoulder stability.</li>
                                <li className="tips-list">Keep your ribs tucked and do not let your lower back arch.</li>
                                <li className="tips-list">Only roll out as far as you can while maintaining a strong brace.</li>
                                <li className="tips-list">Start from the knees before attempting standing variations.</li>
                            </td>
                            <td>
                                <li className="tips-list">A strict bodyline core movement that challenges the abs, hip flexors, and full-body tension.</li>
                                <li className="tips-list">Keep your torso and legs moving as one unit on every rep.</li>
                                <li className="tips-list">Use a bench or stable support that lets your shoulders stay secure.</li>
                                <li className="tips-list">Control the lowering phase instead of dropping through the rep.</li>
                            </td>
                            <td>
                                <li className="tips-list">A hanging core exercise that trains abdominal compression, grip, and scapular control.</li>
                                <li className="tips-list">Avoid swinging by initiating each rep from a dead hang.</li>
                                <li className="tips-list">Lift with your abs and hip flexors rather than just kicking your legs.</li>
                                <li className="tips-list">Touch the bar only if you can keep the movement controlled.</li>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default core;
