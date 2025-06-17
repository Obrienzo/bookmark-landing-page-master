import Button from "../components/Button.jsx";
import Question from "../components/Question.jsx";

function Fqa() {
    return (
        <section className="py-12 md:py-36 flex justify-center items-center">
            <div className="p-5 text-center max-w-2xl">
                <div>
                    <h2 className="text-3xl mb-5 font-medium">Frequently Asked Questions</h2>
                    <p className="text-zinc-400">
                        Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
                    </p>
                </div>
                <div className="my-10 md:my-16">
                    <Question
                        question='What is Bookmark'
                    />
                    <Question
                        question='How can I request a new browser'
                    />
                    <Question
                        question='Is there a mobile app'
                    />
                    <Question
                        question='What about other Chromium browsers'
                    />
                </div>
                <Button variant='blue'>
                    More info
                </Button>
            </div>
        </section>
    );
}


export default Fqa;