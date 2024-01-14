import { useNavigate } from 'react-router-dom';

const Popup = () => {
    const navigate = useNavigate;
    
    const handleSubmit = () => {
      // Simulate PIN confirmation (replace with actual logic)
      setTimeout(() => {
        navigate('/final/'); // Redirect to final confirmation page
      }, 1000); // Simulate processing time
    };
  
    return (
      <div className="popup-overlay">
        <div className="popup-content">
          <h3>Confirm with pin on your phone</h3>
          <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    );
  };

export default Popup;
  