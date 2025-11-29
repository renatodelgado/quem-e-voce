// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { ClockCounterClockwise, House, Info } from 'phosphor-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#E0AAFF',
        tabBarInactiveTintColor: '#9999BB',
        tabBarStyle: {
          backgroundColor: 'rgba(76, 29, 149, 0.6)',   // roxo translúcido suave
          borderTopWidth: 0,
          height: 78,
          paddingBottom: 18,
          paddingTop: 10,
          backdropFilter: 'blur(10px)',               // efeito vidro fosco (iOS/Android 12+)
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
            <House
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
            <ClockCounterClockwise
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
            <Info
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