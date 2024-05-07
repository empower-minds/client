import { current_score } from "../../data";

export function CurrentScore() {
    const getColor = (score, category) => {
        let color = '';
        let backgroundColor = '';
        switch (category) {
            case 'Depresi':
                if (score >= 0 && score <= 9) {
                    color = 'white';
                    backgroundColor = 'green';
                }
                else if (score >= 10 && score <= 13) {
                    color = 'black';
                    backgroundColor = 'lightgreen';
                }
                else if (score >= 14 && score <= 20) {
                    color = 'black';
                    backgroundColor = 'yellow';
                }
                else if (score >= 21 && score <= 27) {
                    color = 'black';
                    backgroundColor = 'orange';
                }
                else {
                    color = 'white';
                    backgroundColor = 'red';
                }
                break;
            case 'Kecemasan':
                if (score >= 0 && score <= 7) {
                    color = 'white';
                    backgroundColor = 'green';
                }
                else if (score >= 8 && score <= 9) {
                    color = 'black';
                    backgroundColor = 'lightgreen';
                }
                else if (score >= 10 && score <= 14) {
                    color = 'black';
                    backgroundColor = 'yellow';
                }
                else if (score >= 15 && score <= 19) {
                    color = 'black';
                    backgroundColor = 'orange';
                }
                else {
                    color = 'white';
                    backgroundColor = 'red';
                }
                break;
            case 'Stress':
                if (score >= 0 && score <= 14) {
                    color = 'white';
                    backgroundColor = 'green';
                }
                else if (score >= 15 && score <= 18) {
                    color = 'black';
                    backgroundColor = 'lightgreen';
                }
                else if (score >= 19 && score <= 25) {
                    color = 'black';
                    backgroundColor = 'yellow';
                }
                else if (score >= 26 && score <= 33) {
                    color = 'black';
                    backgroundColor = 'orange';
                }
                else {
                    color = 'white';
                    backgroundColor = 'red';
                }
                break;
            default:
                color = 'black';
                backgroundColor = 'white';
                break;
        }
        return { color, backgroundColor };
    };

    return (
        <>
            <div className="p-5">
                <h2 className="text-xl raleway-semibold text-center text-gray-800 pb-4">Current Score</h2>
                {current_score.map((score, index) => (
                    <div
                        key={index}
                        className="flex items-center px-2 py-3"
                    >
                        <h3 className="text-sm raleway-medium mb-1 mr-2 items-center text-center" 
                            style={{
                                backgroundColor: getColor(score.score, score.category).backgroundColor,
                                color: getColor(score.score, score.category).color,
                                padding: '4px 8px', // Tambahkan padding
                                borderRadius: '8px',
                                width: '30px',
                                height: '30px' // Buat sudut menjadi lebih bulat
                            }}
                        >
                            {score.score}
                        </h3>
                        <p className="text-sm poppins-regular text-gray-600">{score.title}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
