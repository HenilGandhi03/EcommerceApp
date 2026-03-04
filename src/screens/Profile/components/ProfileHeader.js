export const ProfileHeader = ({ name, status, navigation }) => {
  const { colors, sizes } = useTheme();
  return (
    <View style={[styles.headerContainer, { backgroundColor: colors.headerBg, borderBottomLeftRadius: sizes.headerCurve, borderBottomRightRadius: sizes.headerCurve }]}>
      <SafeAreaView edges={['top']}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.navIcon}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>My Profile</Text>
          <TouchableOpacity>
            <Text style={styles.navIcon}>⚙</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.profileInfo}>
          <View style={[styles.avatarBorder, { borderColor: colors.brandGold }]}>
            <View style={styles.avatar}>
               <Text style={{fontSize: 40}}>👤</Text>
            </View>
            <TouchableOpacity style={[styles.editCircle, { backgroundColor: colors.surface }]}>
              <Text style={{ fontSize: 12 }}>✎</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.nameText}>{name}</Text>
          <View style={styles.statusBadge}>
            <Text style={{ color: colors.brandGold, fontSize: 12 }}>🏅 {status}</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};