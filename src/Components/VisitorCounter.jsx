import React, { useEffect, useState } from "react";
import { getDatabase, ref, get, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import Cookies from 'js-cookie'; // Import js-cookie

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVca1lOVjq0L-7yvDp9As3D2AmOpmnnlM",
  authDomain: "ariane-958c2.firebaseapp.com",
  projectId: "ariane-958c2",
  databaseURL: "https://ariane-958c2-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "ariane-958c2.appspot.com",
  messagingSenderId: "509357251803",
  appId: "1:509357251803:web:b67bece36467f325fb80fe",
  measurementId: "G-PG0HMP3KE4"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function VisitorCounter() {
  const [dailyCount, setDailyCount] = useState(null);
  const [monthlyCount, setMonthlyCount] = useState(null);
  const [yearlyCount, setYearlyCount] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    const dayKey = currentDate.toISOString().split('T')[0]; // YYYY-MM-DD format
    const monthKey = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`; // YYYY-MM format
    const yearKey = `${currentDate.getFullYear()}`; // YYYY format

    // Check for existing visitor ID cookie
    let userId = Cookies.get("visitorId");
    if (!userId) {
      // Generate a new visitor ID if it doesn't exist
      userId = generateVisitorId();
      Cookies.set("visitorId", userId, { expires: 365 }); // Set cookie to expire in 1 year

      // Only update the database if the cookie didn't exist
      const dailyRef = ref(database, `visitors/daily/${dayKey}/users/${userId}`);
      const monthlyRef = ref(database, `visitors/monthly/${monthKey}/users/${userId}`);
      const yearlyRef = ref(database, `visitors/yearly/${yearKey}/users/${userId}`);

      // Update counts in the database
      updateVisitorCount(ref(database, `visitors/daily/${dayKey}/count`), setDailyCount);
      updateVisitorCount(ref(database, `visitors/monthly/${monthKey}/count`), setMonthlyCount);
      updateVisitorCount(ref(database, `visitors/yearly/${yearKey}/count`), setYearlyCount);
    }

    // Fetch existing counts regardless of whether the user is new or returning
    fetchCounts(dayKey, monthKey, yearKey);
  }, []);

  const updateVisitorCount = async (countRef, setCount) => {
    try {
      const snapshot = await get(countRef);
      if (snapshot.exists()) {
        const count = snapshot.val();
        await set(countRef, count + 1); // Increment count by 1
        setCount(count + 1);
      } else {
        await set(countRef, 1);
        setCount(1);
      }
    } catch (error) {
      console.error("Error updating visitor count:", error);
    }
  };

  const fetchCounts = async (dayKey, monthKey, yearKey) => {
    const dailySnapshot = await get(ref(database, `visitors/daily/${dayKey}/count`));
    const monthlySnapshot = await get(ref(database, `visitors/monthly/${monthKey}/count`));
    const yearlySnapshot = await get(ref(database, `visitors/yearly/${yearKey}/count`));

    setDailyCount(dailySnapshot.exists() ? dailySnapshot.val() : 0);
    setMonthlyCount(monthlySnapshot.exists() ? monthlySnapshot.val() : 0);
    setYearlyCount(yearlySnapshot.exists() ? yearlySnapshot.val() : 0);
  };

  const generateVisitorId = () => {
    return `visitor-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  };

  return (
    <div className="font-jura text-gray-800 transition text-xl hover:text-gray-700/90">
      <p>N° de visites par jour: {dailyCount}</p>
      <p>N° de visites par mois: {monthlyCount}</p>
      <p>N° de visites par an: {yearlyCount}</p>
    </div>
  );
}

export default VisitorCounter;
