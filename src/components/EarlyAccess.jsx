import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const INITIAL_FORM = {
  fullName: '',
  email: '',
  organization: '',
  role: '',
  experience: '',
  platform: '',
  interest: '',
  building: '',
}

export function EarlyAccess() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const validate = () => {
    const nextErrors = {}
    if (!form.fullName.trim()) nextErrors.fullName = 'Full name is required.'
    if (!form.email.trim()) {
      nextErrors.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (!form.organization.trim())
      nextErrors.organization = 'Organization or team name is required.'
    if (!form.role.trim()) nextErrors.role = 'Please specify your role.'
    if (!form.interest)
      nextErrors.interest = 'Select a primary area of interest.'
    if (!form.building.trim())
      nextErrors.building = 'Tell us briefly what you are building.'
    return nextErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate()
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }
    setSubmitted(true)
  }

  const inputBase =
    'mt-1.5 block w-full rounded-md border bg-[#080B10] px-3.5 py-2.5 text-sm text-[#F4F7FA] placeholder:text-[#93A1B0]/50 focus:outline-none focus:ring-2 focus:ring-[#55B8FF] transition-colors'

  return (
    <section
      id="early-access"
      className="py-24 lg:py-32 border-b border-[#273644]/70 bg-[#080B10]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left editorial intro */}
          <div className="lg:col-span-5 reveal-up">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#55B8FF] mb-4">
              Build the Future of Robotics With Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#F4F7FA] leading-[1.1]">
              The Next Generation of Intelligent Machines Starts Here.
            </h2>
            <p className="mt-5 text-base text-[#93A1B0] leading-relaxed">
              MotiveOS is seeking robotics developers, research teams and
              technology partners interested in exploring a new approach to
              robotic intelligence. Join the early access programme and help
              shape a platform designed for the next generation of autonomous
              systems.
            </p>

            <div className="mt-8 border-t border-[#273644] pt-6 space-y-3 text-sm text-[#93A1B0]">
              <p>
                Our team will review your submission and contact you about
                potential collaboration opportunities.
              </p>
              <p className="text-xs text-[#93A1B0]/80">
                Privacy notice: Information submitted here is used solely to
                evaluate early access participation and communicate about
                MotiveOS. Please do not include sensitive credentials or
                proprietary hardware access keys.
              </p>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 reveal-up">
            <div className="rounded-lg border border-[#273644] bg-[#111820] p-6 sm:p-8">
              {submitted ? (
                <div
                  role="status"
                  className="py-10 text-center max-w-md mx-auto space-y-4"
                >
                  <CheckCircle2 className="h-10 w-10 text-[#54E4D3] mx-auto" />
                  <h3 className="font-display text-2xl font-semibold text-[#F4F7FA]">
                    Application Received
                  </h3>
                  <p className="text-sm sm:text-base text-[#93A1B0] leading-relaxed">
                    You&apos;re on the MotiveOS early access list. Thank you for
                    your interest in building the next generation of intelligent
                    machines.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(INITIAL_FORM)
                      setSubmitted(false)
                    }}
                    className="mt-4 inline-flex items-center justify-center rounded-md border border-[#273644] bg-[#080B10] px-4 py-2 text-xs font-mono text-[#93A1B0] hover:text-[#F4F7FA] hover:border-[#55B8FF]"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-medium text-[#F4F7FA]"
                      >
                        Full name <span className="text-[#55B8FF]">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Dr. Elena Vance"
                        aria-invalid={Boolean(errors.fullName)}
                        className={`${inputBase} ${
                          errors.fullName ? 'border-red-400' : 'border-[#273644]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs text-red-400">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-[#F4F7FA]"
                      >
                        Email address <span className="text-[#55B8FF]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="elena@robotics-lab.org"
                        aria-invalid={Boolean(errors.email)}
                        className={`${inputBase} ${
                          errors.email ? 'border-red-400' : 'border-[#273644]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-400">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-xs font-medium text-[#F4F7FA]"
                      >
                        Organization <span className="text-[#55B8FF]">*</span>
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        value={form.organization}
                        onChange={handleChange}
                        placeholder="Company, lab, or university"
                        aria-invalid={Boolean(errors.organization)}
                        className={`${inputBase} ${
                          errors.organization
                            ? 'border-red-400'
                            : 'border-[#273644]'
                        }`}
                      />
                      {errors.organization && (
                        <p className="mt-1.5 text-xs text-red-400">
                          {errors.organization}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="role"
                        className="block text-xs font-medium text-[#F4F7FA]"
                      >
                        Role <span className="text-[#55B8FF]">*</span>
                      </label>
                      <input
                        id="role"
                        name="role"
                        type="text"
                        value={form.role}
                        onChange={handleChange}
                        placeholder="Robotics Software Engineer"
                        aria-invalid={Boolean(errors.role)}
                        className={`${inputBase} ${
                          errors.role ? 'border-red-400' : 'border-[#273644]'
                        }`}
                      />
                      {errors.role && (
                        <p className="mt-1.5 text-xs text-red-400">
                          {errors.role}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="experience"
                        className="block text-xs font-medium text-[#F4F7FA]"
                      >
                        Robotics experience
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={form.experience}
                        onChange={handleChange}
                        className={`${inputBase} border-[#273644]`}
                      >
                        <option value="">Select experience level</option>
                        <option value="research">Academic / Research</option>
                        <option value="1-3">1–3 years in robotics</option>
                        <option value="3-7">3–7 years in robotics</option>
                        <option value="7+">7+ years / Production systems</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="platform"
                        className="block text-xs font-medium text-[#F4F7FA]"
                      >
                        Robot or hardware platform
                      </label>
                      <input
                        id="platform"
                        name="platform"
                        type="text"
                        value={form.platform}
                        onChange={handleChange}
                        placeholder="e.g., Custom AMR, ROS 2 mobile base"
                        className={`${inputBase} border-[#273644]`}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-xs font-medium text-[#F4F7FA]"
                    >
                      Primary area of interest{' '}
                      <span className="text-[#55B8FF]">*</span>
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.interest)}
                      className={`${inputBase} ${
                        errors.interest ? 'border-red-400' : 'border-[#273644]'
                      }`}
                    >
                      <option value="">Select primary interest</option>
                      <option value="perception">
                        Environmental Perception &amp; Sensor Fusion
                      </option>
                      <option value="world-model">
                        Spatial Intelligence &amp; World Representation
                      </option>
                      <option value="planning">
                        Intelligent Planning &amp; Navigation
                      </option>
                      <option value="simulation">
                        Simulation &amp; Behaviour Validation
                      </option>
                      <option value="partnership">
                        Research / Hardware Partnership
                      </option>
                    </select>
                    {errors.interest && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.interest}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="building"
                      className="block text-xs font-medium text-[#F4F7FA]"
                    >
                      What are you building?{' '}
                      <span className="text-[#55B8FF]">*</span>
                    </label>
                    <textarea
                      id="building"
                      name="building"
                      rows={4}
                      value={form.building}
                      onChange={handleChange}
                      placeholder="Describe your robotic application, operating environment, and key engineering challenges."
                      aria-invalid={Boolean(errors.building)}
                      className={`${inputBase} resize-y ${
                        errors.building ? 'border-red-400' : 'border-[#273644]'
                      }`}
                    />
                    {errors.building && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.building}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-md bg-[#F4F7FA] px-6 py-3 text-sm font-medium text-[#080B10] hover:bg-[#55B8FF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111820]"
                    >
                      Apply for Early Access
                    </button>
                    <span className="font-mono text-[11px] text-[#93A1B0]">
                      * Required fields
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

