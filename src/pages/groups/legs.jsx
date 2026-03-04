function legs() {
    return(
        <div className="card mt-4">
            <div className="card-body">
                <h1> Pull exercises </h1>
                <table className="table_exercises">
                    <thead>
                        <tr>
                            <th>Squats</th>
                            <th>Lunges squats</th>
                            <th>Bulgarian squats</th>
                            <th>Pistol squats</th>
                            <th>Dragon squats</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="../src/assets/exercises/legs/squats.jpg" alt="squats" className="card-img" height = "20%" width = "5%"/></td>
                            <td><img src="../src/assets/exercises/legs/lunges.jpg" alt="lunges squats" className="card-img" height = "20%" width = "5%"/></td>
                            <td><img src="../src/assets/exercises/legs/bulgarian_squats.jpg" alt="bulgarian squats" className="card-img" height = "20%" width = "5%"/></td>
                            <td><img src="../src/assets/exercises/legs/pistol_squats.jpg" alt="pistol squats" className="card-img" height = "20%" width = "5%"/></td>
                            <td><img src="../src/assets/exercises/legs/dragon_squats.jpg" alt="dragon squats" className="card-img" height = "20%" width = "5%"/></td>
                        </tr>
                        <tr>
                            <td><b>Difficult:</b> Easy </td>
                            <td><b>Difficult:</b> Normal </td>
                            <td><b>Difficult:</b> Intermediate </td>
                            <td><b>Difficult:</b> Hard </td>
                            <td><b>Difficult:</b> Very hard </td>
                        </tr>
                        <tr>
                            <td>
                                <li className="tips-list">A fundamental lower-body movement that builds strength in the quads, glutes, and adductors.</li>
                                <li className="tips-list">Keep your chest lifted and your feet rooted through the floor.</li>
                                <li className="tips-list">Descend to a depth you can control without your heels lifting.</li>
                                <li className="tips-list">Drive your knees in line with your toes on the way up.</li>
                            </td>
                            <td>
                                <li className="tips-list">A split-stance exercise that improves unilateral leg strength, balance, and hip stability.</li>
                                <li className="tips-list">Step long enough that your front heel stays planted at the bottom.</li>
                                <li className="tips-list">Keep your torso tall and lower under control.</li>
                                <li className="tips-list">Push evenly through the front foot to return to standing.</li>
                            </td>
                            <td>
                                <li className="tips-list">A rear-foot-elevated squat that increases load on one leg and exposes side-to-side weaknesses.</li>
                                <li className="tips-list">Keep most of your weight over the front leg instead of the back foot.</li>
                                <li className="tips-list">Use a support if needed so balance does not limit the working leg.</li>
                                <li className="tips-list">Lower slowly to feel the stretch in the front glute and quad.</li>
                            </td>
                            <td>
                                <li className="tips-list">A single-leg squat that demands mobility, balance, and strong knee control through a full range.</li>
                                <li className="tips-list">Counterbalance with your arms forward to stay centered over the foot.</li>
                                <li className="tips-list">Keep the non-working leg active so it does not drag or twist you.</li>
                                <li className="tips-list">Use box or assisted progressions until you can reach depth cleanly.</li>
                            </td>
                            <td>
                                <li className="tips-list">An advanced single-leg squat variation that adds rotation, coordination, and high stability demands.</li>
                                <li className="tips-list">Move slowly because balance errors are magnified in this pattern.</li>
                                <li className="tips-list">Keep your standing foot stable and your knee tracking cleanly.</li>
                                <li className="tips-list">Build solid pistol squats first before progressing to dragon squats.</li>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default legs;
