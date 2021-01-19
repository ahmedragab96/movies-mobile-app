import {
  RootNavigator,
  NavigatorContainer,
  Screen,
  StackNavigator,
  TabNavigator,
} from './types';

export class NavigationFactory {
  navigator: ReturnType<NavigationFactory['createNavigationContainer']>;

  constructor() {
    this.navigator = this.createNavigationContainer();
  }

  createNavigationContainer = () => {
    const splash = new Screen('splash');
    const home = new Screen('home');
    const movies = new Screen('movies');
    const genres = new Screen('genres');
    const actors = new Screen('actors');
    const mainTabs = new TabNavigator()
      .addScreen(home)
      .addScreen(movies)
      .addScreen(genres)
      .addScreen(actors);
    const mainScreen = new NavigatorContainer('home', mainTabs);
    const movieDetails = new Screen('movieDetails');
    const actorDetails = new Screen('actorDetails');
    const genreDetails = new Screen('genreDetails');
    const rootStackNavigator = new StackNavigator()
      .addScreen(splash, true)
      .addScreen(mainScreen)
      .addScreen(movieDetails)
      .addScreen(actorDetails)
      .addScreen(genreDetails);
    const navigationContainer = new RootNavigator(rootStackNavigator);
    return navigationContainer;
  };
}
