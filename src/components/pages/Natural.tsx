import NaturalCardList from "../share/NaturalCardList/NaturalCardList"
import { motion } from "framer-motion"
export default function NaturalPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
        >
            <NaturalCardList />
        </motion.div>
    )
}
