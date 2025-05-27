import { Note } from "@/types";
import styles from "./notes-list.module.scss";
import { NoteListItem } from "./note-list-item";
import { Button, Typography } from "@/components";
import { motion } from "motion/react";
import AddIcon from "../../../assets/plus.svg";

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      duration: 0.1,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

interface NotesListProps {
  title: string;
  notes: Note[];
  onNoteSelect?: (note: Note) => void;
}

export const NotesList = ({ title, notes, onNoteSelect }: NotesListProps) => {
  return (
    <>
      <Typography variant="text-1" className={styles.title}>
        {title}
      </Typography>
      <div className={styles.glass}>
        <Button className={styles.addNoteDesktopButton} leftIcon={<AddIcon />}>
          Create new note
        </Button>
      </div>
      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className={styles.list}
      >
        {notes.map((note) => (
          <motion.li
            key={note.id}
            onClick={() => onNoteSelect?.(note)}
            className={styles.listItem}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <NoteListItem note={note} />
          </motion.li>
        ))}
      </motion.ul>
      <Button
        className={styles.addNoteMobileButton}
        iconOnly
        icon={<AddIcon />}
      />
    </>
  );
};
