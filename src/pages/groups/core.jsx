function core() {
    return(
        <div className="card mt-4">
            <div className="card-body">
                <h1> Core exercises </h1>
                <table className="table_exercises">
                    <thead>
                        <tr>
                            <th>Dragonflags</th>
                            <th>Toes to bar</th>
                            <th>Ab wheel</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="../src/assets/exercises/core/dragonflag.jpg" alt="dragonflags" className="card-img" height = "20%" width = "5%"/></td>
                            <td><img src="../src/assets/exercises/core/toes_bar.jpg" alt="toes to bar" className="card-img" height = "20%" width = "5%"/></td>
                            <td><img src="../src/assets/exercises/core/ab_wheel.jpg" alt="ab wheel" className="card-img" height = "20%" width = "5%"/></td>
                        </tr>
                        <tr>
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

export default core;