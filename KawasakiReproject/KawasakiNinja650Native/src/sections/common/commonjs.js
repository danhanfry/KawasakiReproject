
import {
  Dimensions
} from 'react-native';

export function LayoutDefinition(event) {
    return {
      width: event.nativeEvent.layout.width,
      height: event.nativeEvent.layout.height,
      left: event.nativeEvent.layout.x,
      top: event.nativeEvent.layout.y
    };
}
