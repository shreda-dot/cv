import myhero from "./assets/IMG-1.jpg";
function Home() {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left: photo */}
        <div className="md:w-1/3 w-full bg-gray-200 flex items-center justify-center p-6">
          <img
            src={myhero}
            alt="Profile"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-md"
          />
        </div>

        {/* Right: CV details */}
        <div className="md:w-2/3 w-full p-6">
          <h1 className="text-2xl font-bold">SHREDA</h1>
          <p className="text-sm text-gray-600">TRAINEE — LAGOS, NIGERIA</p>

          <div className="mt-4 text-gray-700">
            <h2 className="font-semibold">Contact</h2>
            <p className="text-sm">
              ezinwa.ugochukwu@gmail.com • +273 7011872350
            </p>
          </div>

          <div className="mt-4 text-gray-700">
            <h2 className="font-semibold">Summary</h2>
            <p className="text-sm">
              A VERY SOCIAL PERSON, REALLY READY TO LEARN NEW THINGS, READY TO
              PUT IN ALL EFFORT TO BETTER THE ORGANIZATION.
            </p>
          </div>

          <div className="mt-4 text-gray-700">
            <h2 className="font-semibold">Experience</h2>
            <ul className="list-disc ml-5 text-sm">
              <li>
                front end developer — FAB-TINA STORES (2018–2020)
                <div className="text-gray-600">
                  <p> Working with the wider development team. </p>
                  <p>Developing new user-facing features.</p>
                </div>
              </li>
              <li className="mt-2">
                INTERNSHIP — ONE-HIVE (2021–PRSENT)
                <div className="text-gray-600">
                 <p>- UNDERGOING AN INTERNSHIP PROGRAM WITH THE AIM OF LEARNING MORE IN REACT FRAMEWORK</p> 
                 <p> - COLLABORATING WITH SENIOR DEVELOPERS TO BUILD WEB APPLICATIONS.</p>
                  <p>- MAINTAINING AND IMPROVING EXISTING CODEBASES.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-4 text-gray-700">
            <h2 className="font-semibold">Skills</h2>
            <p className="text-sm">
              JavaScript, React, Node.js, CSS, Tailwind CSS
            </p>
          </div>

          <div className="mt-4 text-gray-700">
            <h2 className="font-semibold">Education</h2>
            <p className="text-sm">
              B.Sc in BIOCHEMISTRY — Nnamdi Azikiwie (2019-2023)
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Home;