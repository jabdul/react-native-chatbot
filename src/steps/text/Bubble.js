import { Dimensions, View, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const maxWidth = width * 0.6;

export default function Bubble(props) {
  const styles = useStyles(props);
  return <View style={styles.container}>{props.children}</View>;
}

const useStyles = (props) =>
  StyleSheet.create({
    container: {
      backgroundColor: props.bubbleColor,
      borderColor: props.invalid ? "#E53935" : props.color,
      padding: 12,
      minHeight: 42,
      borderTopLeftRadius: () => {
        const { isFirst, isLast, user } = props;
        if (!isFirst && !isLast) {
          return user ? 18 : 0;
        } else if (!isFirst && isLast) {
          return user ? 18 : 0;
        }
        return 18;
      },
      borderTopRightRadius: () => {
        const { isFirst, isLast, user } = props;
        if (!isFirst && !isLast) {
          return user ? 0 : 18;
        } else if (!isFirst && isLast) {
          return user ? 0 : 18;
        }
        return 18;
      },
      borderBottomRightRadius: (props) => {
        const { isFirst, isLast, user } = props;
        if (!isFirst && !isLast) {
          return user ? 0 : 18;
        } else if (!isFirst && isLast) {
          return 18;
        }
        return props.user ? 0 : 18;
      },
      borderBottomLeftRadius: (props) => {
        const { isFirst, isLast, user } = props;
        if (!isFirst && !isLast) {
          return user ? 18 : 0;
        } else if (!isFirst && isLast) {
          return 18;
        }
        return props.user ? 18 : 0;
      },

      marginTop: (props) => {
        const { isFirst, showAvatar } = props;
        if (!isFirst && showAvatar) {
          return -8;
        } else if (!isFirst && !showAvatar) {
          return -8;
        }

        return 0;
      },
      marginRight: (props) => {
        const { isFirst, showAvatar, user } = props;
        if (!isFirst && showAvatar) {
          return user ? 58 : 6;
        } else if (showAvatar) {
          return 0;
        }

        return 6;
      },
      marginBottom: 10,
      marginLeft: (props) => {
        const { isFirst, showAvatar, user } = props;
        if (!isFirst && showAvatar) {
          return user ? 6 : 58;
        } else if (showAvatar) {
          return 0;
        }

        return 6;
      },
      maxWidth: (props) => {
        const { isFirst, showAvatar } = props;
        if (!isFirst && showAvatar) {
          return maxWidth + 58;
        }

        return maxWidth;
      },
    },
  });
