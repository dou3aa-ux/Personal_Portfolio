import FadeIn from '../components/FadeIn'

function About() {
    return (
    <section className="px-[8%] py-24 max-w-3xl mx-auto">
        <FadeIn direction="up">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
        <p className="text-gray-400 text-lg leading-relaxed">
            Hey! I'm Assila Douaa, a frontend developer who loves
            building beautiful, animated interfaces. I'm based in
            Tunisia and currently working on my first portfolio. 🌸
            </p>
        </FadeIn>
        </section>
    )
}

export default About