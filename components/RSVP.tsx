import { Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner"

export default function RSVP() {

  const [formData,setFormData] = useState({
    name: '',
    attendance: '',
    note: ''
  })
  const [loading,setLoading]=useState(false)
  const submitFunc = async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if (!formData.attendance){
      toast.error("Attendance field cannot be empty", {
        description: `Please make sure to select an option from the attendance field.`,
        position: "top-center",
        className: '!bg-black !text-red-500 !rounded-lg !shadow-lg',
        duration: 10000, 
        action: {
          label: "Dismiss",
          onClick: () => {},
        },
      })
      return
    }
    setLoading(true)
    await fetch("/api/rsvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:formData.name,
        attendance:formData.attendance,
        note:formData.note,
      }),
    });
    toast.success("Your response was received 😊", {
      description: `Thank you ${formData.name}`,
      position: "top-center",
      className: '!bg-black !text-white !rounded-lg !shadow-lg',
      duration: 10000, 
      action: {
        label: "Dismiss",
        onClick: () => setFormData({
          name: '',
          attendance: '',
          note: ''
        }),
      },
    })
      
    setLoading(false)
  }
  return (
    <section id="rsvp" className="relative overflow-hidden bg-[#FFF8EF] px-3 md:px-5 md:py-14 py-10">
      <Image
        src="/images/flower-3.png"
        alt=""
        width={700}
        height={700}
        className="absolute md:-left-45 -left-30 -top-45 rotate-90"
      />

      <Image
        src="/images/flower-4.png"
        alt=""
        width={700}
        height={700}
        className="absolute top-0 md:-right-50 -right-30 -rotate-50"
      />

      <div className="relative px-3 md:px-0 z-10 mx-auto max-w-5xl bg-[#FFF8EF]/65 md:bg-transparent">
        <div data-aos="fade-up" className="md:mb-7 text-center">
          <h2 className="font-serif text-xl md:text-5xl [text-shadow:0_0_2px_#FFF8EF,0_0_6px_#FFF8EF,0_0_14px_#FFF8EF]">
            Kindly Respond Before
          </h2>
          <p className='mt-3 md:text-lg text-base tracking-widest text-gold [text-shadow:0_0_2px_#FFF8EF,0_0_6px_#FFF8EF,0_0_14px_#FFF8EF]'>
              AUGUST 5TH, 2026
          </p>
          <div className="gold-divider mb-6">
              <span
                  className="text-gold text-lg"
                  style={{ color: "var(--gold)" }}
              >
                  <Heart className='text-gold' />
              </span>
          </div>
        </div>
        <form className="grid md:grid-cols-[5fr_2fr]" onSubmit={submitFunc}>
          <div data-aos="fade-up" className="grid gap-6 rounded-lg-xl md:grid-cols-2 md:p-10">
            <div className="md:col-span-2">
              <label className="text-sm font-medium [text-shadow:0_0_2px_#FFF8EF,0_0_6px_#FFF8EF,0_0_14px_#FFF8EF]">Full Name</label>
              <input
                type="text"
                required
                placeholder="Your full name"
                value={formData.name}
                onChange={(e)=>setFormData({...formData,name:e.target.value})}
                className="mt-2 w-full border border-[#dcc79b] rounded-lg bg-[#FFF8EF] px-4 py-3 outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-medium [text-shadow:0_0_2px_#FFF8EF,0_0_6px_#FFF8EF,0_0_14px_#FFF8EF]">Attendance</label>

              <div className="mt-2 grid md:grid-cols-2 gap-5">
                
                <label className="flex bg-[#FFF8EF] cursor-pointer [text-shadow:0_0_2px_#FFF8EF,0_0_6px_#FFF8EF,0_0_14px_#FFF8EF] items-center gap-3 rounded-lg border border-[#dcc79b] px-5 py-3">
                  <input
                    type="radio"
                    name="attendance"
                    value="accept"
                    checked={formData.attendance === 'accept'}
                    onChange={(e)=>setFormData({...formData,attendance:e.target.value})}
                    className="peer hidden"
                  />

                  {/* Radio */}
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#dcc79b] transition-all peer-checked:border-[#C9A84C] peer-checked:bg-[#C9A84C]" />

                  <span className="text-sm">Joyfully Accepts</span>
                </label>

                
                <label className="flex bg-[#FFF8EF] cursor-pointer items-center gap-3 rounded-lg border border-[#dcc79b] px-5 py-3">
                  <input
                    type="radio"
                    name="attendance"
                    value="decline"
                    className="peer hidden"
                    checked={formData.attendance === 'decline'}
                    onChange={(e)=>setFormData({...formData,attendance:e.target.value})}
                  />

                  {/* Radio */}
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#dcc79b] transition-all peer-checked:border-[#C9A84C] peer-checked:bg-[#C9A84C]" />

                  <span className="text-sm">Regretfully Declines</span>
                </label>

              </div>
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium [text-shadow:0_0_2px_#FFF8EF,0_0_6px_#FFF8EF,0_0_14px_#FFF8EF]">Notes</label>
              <textarea
                placeholder="Add any notes here..."
                rows={4}
                value={formData.note}
                onChange={(e)=>setFormData({...formData,note:e.target.value})}
                className="mt-2 w-full resize-none max-h-20 border border-[#dcc79b] rounded-lg bg-[#FFF8EF] px-4 py-3 outline-none"
              />
            </div>

            
          </div>
          <div data-aos="fade-left" className="flex flex-col md:pb-10.75 md:pr-14">
            <div className="md:mt-auto mt-3">
              <button
                type="submit"
                disabled={loading}
                className="rounded-lg w-full bg-[#0C5568] px-8 py-4 text-xs md:text-sm font-semibold text-white"
              >
                {loading ? 'Submitting...' : 'CONFIRM RSVP →'}
              </button>
              <div className="rounded-lg text-center text-sm md:text-base mt-5 p-4 border-2 border-gold">
                Entry is strictly by invitation.
                Access card is required for admission.
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}