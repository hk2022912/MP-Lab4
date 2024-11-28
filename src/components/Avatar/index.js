import { Image, View } from 'react-native';

const Avatar = (props) => {
  const size = props.toggle ? 250 : 150; // Determine size based on toggle prop

  return (
    <View
      style={{
        width: size,
        height: size,
        borderWidth: 5,
        borderColor: '#000',
        borderRadius: 50, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        overflow: 'hidden',
      }}
    >
      <Image
        source={require('../../assets/6.jpg')}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: size / 2, 
        }}
        resizeMode="cover" 
      />
    </View>
  );
};

export default Avatar;
