export default function Marquee() {
  return (
    <div className="bg-yellow-2 py-3">
      <div className="marquee-wrap">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="marquee-item">
            <div className="icon mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="20"
                viewBox="0 0 15 20"
              >
                <path
                  d="M14.5833 8H8.61742L9.94318 0L0 12H5.96591L4.64015 20L14.5833 8"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <p className="text">Spring Clearance Event: Save Up to 70%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
