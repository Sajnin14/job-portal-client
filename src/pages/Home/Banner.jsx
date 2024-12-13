import { motion } from "motion/react"
import team1 from '../../assets/images/team1.jpg'
import team2 from '../../assets/images/team2.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-96">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="flex-1">
                        <motion.img
                            animate={{ y: [0, 70, 0] }}
                            transition={{ duration: 10, repeat: Infinity }}
                            src={team1} className="w-72 rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-blue-600" />

                        <motion.img
                            animate={{ x: [100, 170, 100] }}
                            transition={{ duration: 10, repeat: Infinity }}
                            src={team2} className="w-72 h-48 object-cover rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-blue-600" />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-5xl font-bold">Job Portal News!</h1>
                        <motion.h1 animate={{ x: 40 }} transition={{ duration: 1, ease: 'easeOut', repeat: Infinity }} className="text-5xl font-bold">Job <motion.span transition={{ duration: 1, repeat: Infinity }} animate={{ color: ['#eeff33', '#33fff5', '#ff33fc'] }}>Portal</motion.span> News!</motion.h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;