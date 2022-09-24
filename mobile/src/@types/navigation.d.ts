export interface GameParams {
    id: string;
    title: string;
    bannerUrl: string;
  }

declare global {
    namespace ReactNavigation {
        interface RootParamList{
            home: undefined;
            game: GameParams
        }
    }
}

export default global;
