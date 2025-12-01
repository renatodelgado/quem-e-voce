import { Tabs } from 'expo-router';
import { ClockCounterClockwiseIcon, HouseIcon, InfoIcon } from 'phosphor-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#E0AAFF',
        tabBarInactiveTintColor: '#9999BB',
        tabBarStyle: {
          backgroundColor: 'rgba(76, 29, 149, 0.6)',
          borderTopWidth: 0,
          height: 78,
          paddingBottom: 18,
          paddingTop: 10,
          backdropFilter: 'blur(10px)',
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          marginTop: 4,
        },
        tabBarItemStyle: {
          borderRadius: 20,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Oráculo",
          tabBarIcon: ({ focused }) => (
            <HouseIcon
              size={28}
              weight={focused ? 'fill' : 'regular'}
              color={focused ? '#E0AAFF' : '#CCCCDD'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="historico"
        options={{
          title: "Revelados",
          tabBarIcon: ({ focused }) => (
            <ClockCounterClockwiseIcon
              size={28}
              weight={focused ? 'fill' : 'regular'}
              color={focused ? '#E0AAFF' : '#CCCCDD'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="sobre"
        options={{
          title: "Véu do Tempo",
          tabBarIcon: ({ focused }) => (
            <InfoIcon
              size={28}
              weight={focused ? 'fill' : 'regular'}
              color={focused ? '#E0AAFF' : '#CCCCDD'}
            />
          ),
        }}
      />
    </Tabs>
  );
}