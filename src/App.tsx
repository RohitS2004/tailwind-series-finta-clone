import { Next } from "./assets/icons";
import { Button, Chip, Container, Line, Navbar } from "./components";
import type { NavItem } from "./types";
import heroImage from "./assets/hero-ui-v6.webp";

const App = () => {
    const items: NavItem[] = [
        {
            name: "Founder",
            link: "/",
        },
        {
            name: "Guide",
            link: "/",
        },
        {
            name: "Pricing",
            link: "/",
        },
        {
            name: "Log In",
            link: "/",
        },
        {
            name: "Get started",
            link: "/",
            isButton: true,
        },
    ];

    return (
        <div className="max-w-full min-h-screen bg-linear-to-b from-slate-50 from-0% via-blue-100 via-40% to-slate-50 to-90%">
            <Container>
                <Line
                    orientation="vertical"
                    leftVerticalLine={true}
                    left="-left-[10px]"
                />

                <Line orientation="vertical" right="-right-[10px]" />
                <Navbar items={items} />

                <main className="mt-16">
                    <Chip
                        text="We're hiring Founding Ruby Engineers"
                        icon={
                            <Next
                                width={14}
                                height={14}
                                stroke="#314158"
                                strokeWidth={3}
                            />
                        }
                    />

                    {/* Hero Section Heading */}
                    <div className="mt-12 mx-auto max-w-2xl text-6xl leading-16 tracking-tighter font-semibold text-slate-800 text-center">
                        Magically simplify accounting and taxes
                    </div>

                    {/* Hero Sectoin Subtext */}
                    <div className="mt-7 mx-auto max-w-lg text-lg text-center text-slate-600">
                        Automated bookkeeping. Effortless tax filing. Financial
                        clarity. Set up in 10 mins. Back to building by 11:49pm.
                    </div>

                    {/* Hero Section CTA */}
                    <div className="flex mx-auto w-fit mt-8 gap-5">
                        <Button
                            buttonText="Get started"
                            buttonType={"primary"}
                        />
                        <Button
                            buttonText="Pricing"
                            buttonType="plain"
                            buttonIcon={
                                <Next
                                    width={14}
                                    height={14}
                                    stroke="#314158"
                                    strokeWidth={3}
                                />
                            }
                        />
                    </div>

                    {/* Hero Section Small Text */}
                    <div className="mt-6 mx-auto w-fit">
                        <span className="text-sm text-slate-500">
                            For US-based startups.
                        </span>
                    </div>

                    <div
                    className="relative"
                    >
                        <Line
                            orientation="horizontal"
                            topHorizontalLine={true}
                            top="-top-[20px]"
                        />
                        <img
                            src={heroImage}
                            alt="Hero Section Image"
                            className="mt-32 mask-b-from-50%"
                        />
                    </div>
                </main>
            </Container>
        </div>
    );
};

export default App;
