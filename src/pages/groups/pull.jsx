function pull() {
    return(
        <>
        <div className="card mt-4">
            <div className="card-body">
                <h1> Pull exercises </h1>
                <table className="table_exercises">
                    <thead>
                        <tr>
                            <th>Inverted Rows</th>
                            <th>Chin ups</th>
                            <th>Pull ups</th>
                            <th>High pull ups</th>
                            <th>Muscle ups</th>
                            <th>Front lever pull ups</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="../src/assets/exercises/pull/inverted_row.png" alt="inverted rows" className="card-img"/></td>
                            <td><img src="../src/assets/exercises/pull/chin_ups.jpg" alt="chin ups" className="card-img"/></td>
                            <td><img src="../src/assets/exercises/pull/pull_ups.jpg" alt="pull ups" className="card-img"/></td>
                            <td><img src="../src/assets/exercises/pull/high_pull_ups.png" alt="high pull ups" className="card-img"/></td>
                            <td><img src="../src/assets/exercises/pull/muscle_ups.png" alt="muscle ups" className="card-img"/></td>
                            <td><img src="../src/assets/exercises/pull/front_lever_pull_ups.png" alt="front lever pull ups" className="card-img"/></td>
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
        </>
    );
}

export default pull;