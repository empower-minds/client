import { IoIosArrowRoundForward } from "react-icons/io";
import NotifFeedbackIcon from '../../assets/icons/Icon feedback.png'
import { current_score } from "../../data";

function getCategory(category, score) {
  if (category === "Depresi") {
    if (score >= 0 && score <= 9) return "Normal";
    else if (score >= 10 && score <= 13) return "Ringan";
    else if (score >= 14 && score <= 20) return "Sedang";
    else if (score >= 21 && score <= 27) return "Parah";
    else return "Sangat Parah";
  } else if (category === "Kecemasan") {
    if (score >= 0 && score <= 7) return "Normal";
    else if (score >= 8 && score <= 9) return "Ringan";
    else if (score >= 10 && score <= 14) return "Sedang";
    else if (score >= 15 && score <= 19) return "Parah";
    else return "Sangat Parah";
  } else if (category === "Stress") {
    if (score >= 0 && score <= 14) return "Normal";
    else if (score >= 15 && score <= 18) return "Ringan";
    else if (score >= 19 && score <= 25) return "Sedang";
    else if (score >= 26 && score <= 33) return "Parah";
    else return "Sangat Parah";
  }
}

export function NotifikasiFeedback() {
  return (
    <>
      {current_score.map((item, index) => (
        <div className="py-2 px-4 mt-5 bg-white rounded-[20px] w-full h-fit" key={index}>
          <div className="flex items-center py-3">
            <img src={NotifFeedbackIcon} className="mr-4" alt="Feedback Icon" />
            <div>
              <h3 className="text-sm text- raleway-medium mb-1">{`Tingkat ${item.title}`}</h3>
              <p className="text-sm poppins-regular text-gray-400">{getCategory(item.category, item.score)}</p>
            </div>
            <div className="p-2 ml-auto mr-4 w-20 border-l-2">
              {/* <IoIosArrowRoundForward className="color-[#5182CC]" /> */}
              <p className="poppins-light text-sm text-[#1486E1] pl-2"><a href="#">See Feedback</a></p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
