import { Image, TouchableOpacity } from "react-native";
import styles from '../styles/AuthScreen/LoginStyles'

interface SocialButtonProps {
  image: any;
  onPress: () => void;
  disabled?: boolean;
}

const SocialButton = ({ image, onPress, disabled = false }: SocialButtonProps) => {
  return (
    <TouchableOpacity style={styles.socialBtn} onPress={onPress} disabled={disabled}>
      <Image source={image} style={styles.socialBtnImage} />
    </TouchableOpacity>
  );
};

export default SocialButton;
