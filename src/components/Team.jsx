import { TEAM_MEMBERS } from '../data/content'
import teamTunde from '../assets/images/team-tunde.jpg'
import teamChidinma from '../assets/images/team-chidinma.jpg'
import teamNgozi from '../assets/images/team-ngozi.jpg'
import teamIbrahim from '../assets/images/team-ibrahim.jpg'
import teamSegun from '../assets/images/team-segun.jpg'
import teamAmina from '../assets/images/team-amina.jpg'

const TEAM_IMAGES = {
  tunde: teamTunde,
  chidinma: teamChidinma,
  ibrahim: teamIbrahim,
  ngozi: teamNgozi,
  segun: teamSegun,
  amina: teamAmina,
}

export function Team() {
  return (
    <section
      id="team"
      className="py-24 lg:py-32 border-b border-[#273644]/70 bg-[#080B10]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl reveal-up">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#55B8FF] mb-4">
            The Team
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#F4F7FA] leading-[1.1]">
            Engineers Building Physical Intelligence.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#93A1B0] leading-relaxed">
            MotiveOS is led by a Nigerian robotics and AI engineering team
            combining expertise across perception, spatial intelligence,
            simulation, and safety-critical autonomous systems.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 reveal-up">
          {TEAM_MEMBERS.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded-lg border border-[#273644] bg-[#111820] transition-colors hover:border-[#3A4F63]"
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-[#0D131B]">
                <img
                  src={TEAM_IMAGES[member.imageKey]}
                  alt={`${member.name}, ${member.role} at MotiveOS`}
                  loading="lazy"
                  width="600"
                  height="800"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-[#F4F7FA]">
                  {member.name}
                </h3>
                <p className="mt-1 font-mono text-xs text-[#55B8FF]">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-[#93A1B0] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
