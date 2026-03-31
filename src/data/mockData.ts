export interface Driver {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
  rating: number;
  totalRides: number;
  vehicle: Vehicle;
  status: "online" | "offline" | "on_ride";
  earnings: number;
  joinedDate: string;
  location: { lat: number; lng: number };
}

export interface Vehicle {
  make: string;
  model: string;
  year: number;
  color: string;
  plate: string;
  type: "sedan" | "suv" | "compact" | "van";
}

export interface Passenger {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
  rating: number;
  totalRides: number;
  joinedDate: string;
  paymentMethod: string;
}

export interface Ride {
  id: string;
  passengerId: string;
  driverId: string;
  passengerName: string;
  driverName: string;
  pickup: {
    address: string;
    lat: number;
    lng: number;
  };
  dropoff: {
    address: string;
    lat: number;
    lng: number;
  };
  status: "requested" | "accepted" | "in_progress" | "completed" | "cancelled";
  fare: number;
  platformFee: number;
  distance: string;
  duration: string;
  rating: number;
  date: string;
  time: string;
}

export const mockDrivers: Driver[] = [
  {
    id: "d1",
    name: "Carlos Mendes",
    email: "carlos@email.com",
    phone: "+55 11 98765-4321",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    rating: 4.9,
    totalRides: 1247,
    vehicle: {
      make: "Toyota",
      model: "Corolla",
      year: 2023,
      color: "Silver",
      plate: "ABC-1234",
      type: "sedan",
    },
    status: "online",
    earnings: 4520.5,
    joinedDate: "2024-03-15",
    location: { lat: -23.5505, lng: -46.6333 },
  },
  {
    id: "d2",
    name: "Ana Silva",
    email: "ana.silva@email.com",
    phone: "+55 11 91234-5678",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    rating: 4.8,
    totalRides: 892,
    vehicle: {
      make: "Honda",
      model: "Civic",
      year: 2024,
      color: "Black",
      plate: "DEF-5678",
      type: "sedan",
    },
    status: "online",
    earnings: 3210.0,
    joinedDate: "2024-06-20",
    location: { lat: -23.5615, lng: -46.6559 },
  },
  {
    id: "d3",
    name: "Roberto Lima",
    email: "roberto@email.com",
    phone: "+55 21 99876-5432",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    rating: 4.7,
    totalRides: 2156,
    vehicle: {
      make: "Hyundai",
      model: "Tucson",
      year: 2023,
      color: "White",
      plate: "GHI-9012",
      type: "suv",
    },
    status: "on_ride",
    earnings: 8930.75,
    joinedDate: "2023-11-01",
    location: { lat: -22.9068, lng: -43.1729 },
  },
  {
    id: "d4",
    name: "Fernanda Costa",
    email: "fernanda@email.com",
    phone: "+55 31 98765-1234",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    rating: 4.95,
    totalRides: 567,
    vehicle: {
      make: "Volkswagen",
      model: "T-Cross",
      year: 2024,
      color: "Red",
      plate: "JKL-3456",
      type: "suv",
    },
    status: "offline",
    earnings: 2150.25,
    joinedDate: "2025-01-10",
    location: { lat: -19.9167, lng: -43.9345 },
  },
];

export const mockPassengers: Passenger[] = [
  {
    id: "p1",
    name: "Maria Santos",
    email: "maria@email.com",
    phone: "+55 11 97654-3210",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    rating: 4.8,
    totalRides: 156,
    joinedDate: "2024-08-10",
    paymentMethod: "Credit Card •••• 4242",
  },
  {
    id: "p2",
    name: "João Oliveira",
    email: "joao@email.com",
    phone: "+55 11 91234-9876",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    rating: 4.6,
    totalRides: 89,
    joinedDate: "2025-01-05",
    paymentMethod: "PIX",
  },
  {
    id: "p3",
    name: "Lucia Pereira",
    email: "lucia@email.com",
    phone: "+55 21 98765-4321",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
    rating: 5.0,
    totalRides: 324,
    joinedDate: "2024-04-22",
    paymentMethod: "Debit Card •••• 1234",
  },
];

export const mockRides: Ride[] = [
  {
    id: "r1",
    passengerId: "p1",
    driverId: "d1",
    passengerName: "Maria Santos",
    driverName: "Carlos Mendes",
    pickup: {
      address: "Av. Paulista, 1000 - São Paulo",
      lat: -23.5631,
      lng: -46.6544,
    },
    dropoff: {
      address: "Rua Augusta, 500 - São Paulo",
      lat: -23.5534,
      lng: -46.6576,
    },
    status: "completed",
    fare: 18.5,
    platformFee: 0.99,
    distance: "3.2 km",
    duration: "12 min",
    rating: 5,
    date: "2026-03-30",
    time: "14:30",
  },
  {
    id: "r2",
    passengerId: "p2",
    driverId: "d2",
    passengerName: "João Oliveira",
    driverName: "Ana Silva",
    pickup: {
      address: "Shopping Ibirapuera - São Paulo",
      lat: -23.5873,
      lng: -46.6606,
    },
    dropoff: {
      address: "Aeroporto Congonhas - São Paulo",
      lat: -23.6266,
      lng: -46.6563,
    },
    status: "completed",
    fare: 25.0,
    platformFee: 0.99,
    distance: "5.8 km",
    duration: "18 min",
    rating: 4,
    date: "2026-03-29",
    time: "09:15",
  },
  {
    id: "r3",
    passengerId: "p3",
    driverId: "d3",
    passengerName: "Lucia Pereira",
    driverName: "Roberto Lima",
    pickup: {
      address: "Copacabana Beach - Rio de Janeiro",
      lat: -22.9711,
      lng: -43.1826,
    },
    dropoff: {
      address: "Cristo Redentor - Rio de Janeiro",
      lat: -22.9519,
      lng: -43.2105,
    },
    status: "in_progress",
    fare: 35.0,
    platformFee: 0.99,
    distance: "8.5 km",
    duration: "25 min",
    rating: 0,
    date: "2026-03-31",
    time: "10:00",
  },
  {
    id: "r4",
    passengerId: "p1",
    driverId: "d4",
    passengerName: "Maria Santos",
    driverName: "Fernanda Costa",
    pickup: {
      address: "Praça da Liberdade - Belo Horizonte",
      lat: -19.932,
      lng: -43.9381,
    },
    dropoff: {
      address: "Mercado Central - Belo Horizonte",
      lat: -19.9189,
      lng: -43.9397,
    },
    status: "completed",
    fare: 12.0,
    platformFee: 0.99,
    distance: "2.1 km",
    duration: "8 min",
    rating: 5,
    date: "2026-03-28",
    time: "16:45",
  },
  {
    id: "r5",
    passengerId: "p2",
    driverId: "d1",
    passengerName: "João Oliveira",
    driverName: "Carlos Mendes",
    pickup: {
      address: "Estação Sé - São Paulo",
      lat: -23.5502,
      lng: -46.634,
    },
    dropoff: {
      address: "Parque Ibirapuera - São Paulo",
      lat: -23.5874,
      lng: -46.6576,
    },
    status: "completed",
    fare: 22.0,
    platformFee: 0.99,
    distance: "6.3 km",
    duration: "20 min",
    rating: 5,
    date: "2026-03-27",
    time: "11:00",
  },
  {
    id: "r6",
    passengerId: "p3",
    driverId: "d2",
    passengerName: "Lucia Pereira",
    driverName: "Ana Silva",
    pickup: {
      address: "Terminal Barra Funda - São Paulo",
      lat: -23.5257,
      lng: -46.667,
    },
    dropoff: {
      address: "Vila Madalena - São Paulo",
      lat: -23.5464,
      lng: -46.6905,
    },
    status: "requested",
    fare: 15.0,
    platformFee: 0.99,
    distance: "4.0 km",
    duration: "14 min",
    rating: 0,
    date: "2026-03-31",
    time: "08:30",
  },
];

export const nearbyDrivers = [
  { id: "d1", name: "Carlos M.", distance: "2 min away", vehicle: "Toyota Corolla", rating: 4.9, lat: -23.5535, lng: -46.6363 },
  { id: "d2", name: "Ana S.", distance: "4 min away", vehicle: "Honda Civic", rating: 4.8, lat: -23.5595, lng: -46.6509 },
  { id: "d4", name: "Fernanda C.", distance: "6 min away", vehicle: "VW T-Cross", rating: 4.95, lat: -23.5485, lng: -46.6413 },
];

export const earningsData = {
  today: 185.5,
  week: 1250.75,
  month: 4520.5,
  rides: {
    today: 8,
    week: 52,
    month: 195,
  },
  weeklyChart: [
    { day: "Mon", amount: 165 },
    { day: "Tue", amount: 210 },
    { day: "Wed", amount: 180 },
    { day: "Thu", amount: 195 },
    { day: "Fri", amount: 250 },
    { day: "Sat", amount: 145 },
    { day: "Sun", amount: 105 },
  ],
};
