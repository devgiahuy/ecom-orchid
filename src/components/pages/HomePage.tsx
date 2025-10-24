import OrchidsCardList from "../share/OrchidCardList"

import { motion } from "framer-motion"
export default function HomePage() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
            >
                <OrchidsCardList />
            </motion.div>
        </>
    )
}
