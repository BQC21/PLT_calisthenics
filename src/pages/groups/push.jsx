function push() {
    return(
        <div className="card mt-4">
            <div className="card-body">
                <h1> Push exercises </h1>
                <table className="table_exercises">
                    <thead>
                        <tr>
                            <th>Push ups</th>
                            <th>Dips</th>
                            <th>Pike push ups</th>
                            <th>Archer push ups</th>
                            <th>Handstand push ups</th>
                            <th>Planche push ups</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="../src/assets/exercises/push/push_ups.jpeg" alt="push ups" className="card-img" height = "20%" width = "5%"/></td>
                            <td><img src="../src/assets/exercises/push/dip.jpg" alt="dips" className="card-img" height = "20%" width = "5%"/></td>
                            <td><img src="../src/assets/exercises/push/pike_push_ups.jpg" alt="pike push ups" className="card-img" height = "20%" width = "5%"/></td>
                            <td><img src="../src/assets/exercises/push/archer_push_ups.jpeg" alt="archer push ups" className="card-img" height = "20%" width = "5%"/></td>
                            <td><img src="../src/assets/exercises/push/handstand_push_ups.jpg" alt="handstand push ups" className="card-img" height = "20%" width = "5%"/></td>
                            <td><img src="../src/assets/exercises/push/planche_push_ups.jpg" alt="planche push ups" className="card-img" height = "20%" width = "5%"/></td>
                        </tr>
                        <tr>
                            <td></td>
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

export default push;