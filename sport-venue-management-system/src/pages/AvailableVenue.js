import "../style.css";

function AvailableVenue() {
  return (
    <div>
      <div className="venue1">
        <div className="venueHeading1">
          <h1 className="heading1">Motera stadium</h1>
        </div>
        <div className="Details1">
          <b>
            The Narendra Modi Stadium, formerly known as Sardar Vallabhbhai
            Patel <br />
            Stadium, is a cricket stadium situated Ahmedabad, India. <br />
          </b>
          <div className="one">
            <p>
              <br></br>
              <b>Status:</b>
              <mark>Available</mark>
            </p>
            <p>
              <b>Capacity:</b>
              <mark>132,000</mark>
            </p>
            <div className="two">
              <button type="Button" className="button1">
                Book Venue
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="venue2">
        <div className="venueHeading1">
          <h1 className="heading2">Khandheri Cricket Stadium</h1>
        </div>
        <div className="Details2">
          <b>
            Saurashtra Cricket Association Stadium, also known as the Khandheri
            Cricket Stadium, is a cricket stadium in Rajkot, India. <br />
            It is Gujarat's first solar-powered stadium. <br />
          </b>
          <div className="one">
            <p>
              <br></br>
              <b>Status:</b>
              <mark>Available</mark>
            </p>
            <p>
              <b>Capacity:</b>
              <mark>28,500</mark>
            </p>
            <div className="two">
              <button type="Button" className="button1">
                Book Venue
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="venue3">
        <div className="venueHeading3">
          <h1 className="heading2">Lalbhai Stadium</h1>
        </div>
        <div className="Details3">
          <b>
            Lalbhai Contractor Stadium is a cricket stadium in Surat, Gujarat,
            India. <br />
            <br />
            The stadium is owned by the Surat District Cricket Association.
          </b>
          <div className="one">
            <p>
              <br></br>
              <b>Status:</b>
              <mark>Available</mark>
            </p>
            <p>
              <b>Capacity:</b>
              <mark>7,000</mark>
            </p>
            <div className="two">
              <button type="Button" className="button1">
                Book Venue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvailableVenue;
