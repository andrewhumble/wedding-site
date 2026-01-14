import PageLayout from '@/components/PageLayout'
import DoubleBorderCard from '@/ui/DoubleBorderCard';

interface FAQItemProps {
    question: string;
    answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
    return (
        <div className="mb-8 last:mb-0 text-left">
            <h2 className="text-xl md:text-2xl font-serif text-stone-800 mb-3">
                {question}
            </h2>
            <p className="font-serif md:text-lg text-stone-600 leading-relaxed">
                {answer}
            </p>
        </div>
    );
}

export default function FAQ() {
    const faqs = [
        {
            question: "What time should I arrive?",
            answer: "Please arrive by 4:45 to allow time to get settled in your seat before the start of the ceremony at 5."
        },
        {
            question: "Will the event be indoors or outdoors?",
            answer: "We are planning for an indoor ceremony, followed by an outside cocktail hour and reception."
        },
        {
            question: "Is there a dress code?",
            answer: "The dress code is black tie preferred. For ladies, this means full-length dresses or a pant suit. For men, tuxedos are encouraged though dark suits work great as well."
        },
        {
            question: "Can I bring a guest or plus-one?",
            answer: "Due to limited space, we are only able to accommodate guests formally invited on your wedding invitation. Any guests or plus-ones will be indicated on the invitation and in the RSVP."
        },
        {
            question: "Is parking available at the venue?",
            answer: "We will be providing a valet service and parking your car a close walking distance from the venue."
        }
    ];

    return (
        <PageLayout title="FAQ">
            <div className="relative max-w-4xl mx-auto px-6 md:px-16">
                <DoubleBorderCard>
                    <div className="w-full max-w-3xl">
                        {faqs.map((faq, index) => (
                            <div key={index}>
                                <FAQItem question={faq.question} answer={faq.answer} />
                                {index < faqs.length - 1 && (
                                    <div className="border-t border-stone-200 my-8" />
                                )}
                            </div>
                        ))}
                    </div>
                </DoubleBorderCard>
            </div>
        </PageLayout>
    );
}

