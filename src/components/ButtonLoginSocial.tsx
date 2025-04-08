import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

type Props = TouchableOpacityProps & {
  icon: keyof typeof FontAwesome5.glyphMap;
};

export function ButtonLoginSocial({ icon, ...rest }: Props) {
  return (
    <TouchableOpacity className="rounded-lg w-14 h-12 items-center justify-center p-3 bg-black" {...rest} activeOpacity={0.5}>
      <FontAwesome5 name={icon} size={20} color="white" />
    </TouchableOpacity>
  );
}
