import profilePic from '../assets/pp.png';

function Card() {
  return (
    <div className="border border-gray-100 rounded-lg shadow-md p-5 m-2.5 text-center max-w-80 flex flex-col items-center relative overflow-hidden">
      <img className="w-24 h-24 rounded-full mb-2.5 mr-5 object-cover" src={profilePic} alt="profile picture" />

      <p className="font-sans text-gray-600 px-8 italic text-xs">"I recently used this platform to organize a large corporate event, and I was quite impressed with the overall experience. The interface was user-friendly, which made setting up the event a breeze. The customizable features allowed 
        me to tailor the event to our specific needs, from the registration process to the event layout."</p>
      <div className="mt-2 text-yellow-400 text-center">★★★★☆</div>
      <h2 className="font-sans text-gray-800 m-0 font-bold">Uncle</h2>
    </div>
  );
}

export default Card;
