import { Link } from 'react-router-dom';

function Description() {
	return(
    <>
        <div className="text-center">
            <div className="card mt-4">
                <div className="card-body">
                    <h2>Exercises lists separated for each group</h2>
                    <span> <Link to="/pull">
                            <button className="btn btn-primary mt-3">Pull execises</button> </Link> </span>
                    <span className="mx-5"></span>
                    <span> <Link to="/push">
                            <button className="btn btn-primary mt-3">Push execises</button> </Link> </span>
                    <span className="mx-5"></span>
                    <span> <Link to="/core">
                            <button className="btn btn-primary mt-3">Core execises</button> </Link> </span>
                    <span className="mx-5"></span>
                    <span> <Link to="/legs">
                            <button className="btn btn-primary mt-3">Legs execises</button> </Link> </span>
                </div>
            </div>  
            <div className="card mt-4">
                    <div className="card-body">
                        <h2> Scapular movements </h2>
                        <table className="table_exercises">
                            <thead>
                                <tr>
                                    <th>Protraction</th>
                                    <th>Retraction</th>
                                    <th>Depress</th>
                                    <th>Elevation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="./src/assets/scapular_movements/protraction.png" height = "100" width = "100"></img></td>
                                    <td><img src="./src/assets/scapular_movements/retraction.png" height = "100" width = "100"></img></td>
                                    <td><img src="./src/assets/scapular_movements/depress.png" height = "100" width = "100"></img></td>
                                    <td><img src="./src/assets/scapular_movements/elevation.png" height = "100" width = "100"></img></td>
                                </tr>
                                <tr>
                                    <td>Shoulder blades pulled in and back (as if trying to bring your shoulder blades together).</td>
                                    <td>Shoulder blades pulled out and forward (as if pushing against the ground).</td>
                                    <td>Shoulder blades pulled down (shoulders away from the ears).</td>
                                    <td>Shoulder blades pulled up (shoulders toward the ears).</td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>
            <div className="row-container row g-4 mt-1">
                <div className="col-12 col-lg-6">
                    <section className="card quote-card h-100">
                        <h2>Some essential tips for better performance </h2>
                        <ul className = "tips-list">
                            <li> Nutrition is useful to building muscles and avoiding low energy levels. </li> 
                            <li> Control your calories intake, a professional should asses you and take a plan depending your phase (cutting, maintenance, bulking. </li> 
                            <li> Don't compare your progress with others, each one has a different story. </li> 
                            <li> Nutrition is useful to building muscles and avoiding low energy levels </li> 
                            <li> Don't skip fundamentals, more technique and less ego. </li> 
                            <li> Warm your joints and muscles previous your routine, don't forget streching finish your session </li>
                            <li> Allocate your routines depending your objetives (example: gain muscle, increase your reps, unlock a skill) </li>
                            <li> You don't need pay membership, enough with your creative, willpower and a good plan </li> 
                            <li> Don't confuse unlock with consolidate a skill </li> 
                            <li> Calluses will be your daily bread </li> 
                        </ul>
                    </section>
                </div>
                <div className="col-12 col-lg-6">
                    <section className="card quote-card h-100">
                        <h2>Training routines types </h2>
                        <ul className = "tips-list">
                            <li> <b>Around the world:</b> just take the basics </li> 
                            <li> <b>Full body:</b>  train your whole body (upper to lower)</li> 
                            <li> <b>Muscular group focus:</b>  train a specific muscular group (back, chest, triceps, ...) </li> 
                            <li> <b>Weighted focus:</b> adding additional weights on your exercises </li> 
                            <li> <b>Endurance focus:</b> increase your reps, no needs extra weights </li> 
                            <li> <b>Skill oriented:</b> exercises to reaching a high level skill (L-sit, ) </li> 
                        </ul>
                    </section>
                </div>
            </div>
            <div className="card mt-4">
                    <h2>Check these references for more info</h2>
                    <span> <a href="https://www.youtube.com/@yellowdude_co" target="_blank" rel="noopener noreferrer">Yellow Dude | Gravgear</a></span>
                    <span className="mx-5"></span>
                    <span> <a href="https://www.youtube.com/@algecalistenia" target="_blank" rel="noopener noreferrer">Algecalistenia</a></span>
                    <span className="mx-5"></span>
                    <span> <a href="https://www.youtube.com/@Summerfunfitness" target="_blank" rel="noopener noreferrer">Summenfunfitness</a></span>
                    <span className="mx-5"></span>
                    <span> <a href="https://www.youtube.com/@fitnessFAQs" target="_blank" rel="noopener noreferrer">Fitness FAQs</a></span>
            </div>  
        </div>
    </>      			
	);
}

export default Description;
