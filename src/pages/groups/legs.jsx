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
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default legs;