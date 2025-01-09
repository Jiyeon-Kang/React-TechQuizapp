import { useEffect, useState } from "react";
import { collection } from "firebase/firestore";
import { db } from "../lib/firebase";
import { getDocs } from "firebase/firestore";
import { Question } from "../types";

export const QuizApp = () => {
    const [questions, setQuestions] = useState<Question[]>([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const quizRef = collection(db, "quizzes", "quizId1", "questions");
                const snapshot = await getDocs(quizRef);
                const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Question));
                console.log("Fetched data:", data);
                setQuestions(data);
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };

        fetchQuestions();
    }, []);

    return (
        <div>
            <h1>React Quiz</h1>
            {questions.length > 0 ? (
                questions.map((q, index) => (
                    <div key={q.id}>
                        <h3>{index + 1}. {q.question}</h3>
                        <ul>
                            {q.options.map((option, idx) => (
                                <li key={idx}>{option}</li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p>Loading questions...</p>
            )}
        </div>
    );
};
