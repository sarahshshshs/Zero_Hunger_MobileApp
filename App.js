import { View, Platform, StatusBar } from "react-native";
import AddUser from "./screens/AddUser";
import UserList from "./screens/UserList";
import UpdateUser from "./screens/UpdateUser";
import { NavigationContainer } from "@react-navigation/native";
import { getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "./screens/Dashboard";
import AddRecipePage from "./screens/Recipe/AddRecipe";
import RecipeList from "./screens/Recipe/RecipeList";
import UpdateRecipe from "./screens/Recipe/UpdateRecipe";
import RecipeDashboard from "./screens/Recipe/RecipeDashboard";

import AdvisoryOfficerDashboard from "./screens/AgricultureAdvisoryOfficer/AdvisoryOfficerDashboard";
import AddAnswerPage from "./screens/AgricultureAdvisoryOfficer/AddAnswer";
import AnswerList from "./screens/AgricultureAdvisoryOfficer/AnswerList";
import ViewAnswer from "./screens/AgricultureAdvisoryOfficer/ViewAnswer";
import SubmitAnswer from "./screens/AgricultureAdvisoryOfficer/SubmitAnswer";
import UpdateAnswer from "./screens/AgricultureAdvisoryOfficer/UpdateAnswer";

import FarmerDashboard from "./screens/Farmer/FarmerDashboard";
import AddQuestion from "./screens/Farmer/AddQuestion";

import OrganicDashboard from "./screens/Organic/OrganicDashboard";
import AddNews from "./screens/Organic/AddNews";
import NewsList from "./screens/Organic/NewsList";
import UpdateOrganic from "./screens/Organic/UpdateOrganic";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View
      style={{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Recipe Dashboard" component={RecipeDashboard} />
          <Stack.Screen name="Add Recipe" component={AddRecipePage} />
          <Stack.Screen name="Recipe List" component={RecipeList} />
          <Stack.Screen name="Update Recipe" component={UpdateRecipe} />

          <Stack.Screen name="Advisory Officer Dashboard" component={AdvisoryOfficerDashboard} />
          <Stack.Screen name="Add Answer" component={AddAnswerPage} />
          <Stack.Screen name="Submit Answer" component={SubmitAnswer} />
          <Stack.Screen name="View Answer" component={ViewAnswer} />
          <Stack.Screen name="Answer List" component={AnswerList} />
          <Stack.Screen name="Update Answer" component={UpdateAnswer} />

          <Stack.Screen name="Farmer Dashboard" component={FarmerDashboard} />
          <Stack.Screen name="Add Question" component={AddQuestion} />

          <Stack.Screen name="Add Organic" component={OrganicDashboard} />
          <Stack.Screen name="Add News" component={AddNews} />
          <Stack.Screen name="News List" component={NewsList}/>
          <Stack.Screen name="Update News" component={UpdateOrganic}/>

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
