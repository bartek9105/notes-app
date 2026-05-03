import { Button } from "@/components";
import styles from "./color-tags.module.scss";
import { TagIcon } from "@/assets";
import { useToggle } from "@/hooks";
import { ColorTagsModal } from "./color-tags-modal/color-tags-modal";

export const ColorTags = () => {
  const { isOpen: isColorTagsModalOpen, toggle: colorTagsModalToggle } =
    useToggle();

  return (
    <>
      <Button
        onClick={colorTagsModalToggle}
        iconOnly
        icon={<TagIcon />}
        variant="secondary"
        className={styles.buttonMobile}
        isFlat
      />
      <Button
        onClick={colorTagsModalToggle}
        leftIcon={<TagIcon />}
        variant="border"
        className={styles.buttonDesktop}
      >
        Label color
      </Button>
      <ColorTagsModal
        isOpen={isColorTagsModalOpen}
        toggle={colorTagsModalToggle}
      />
    </>
  );
};
