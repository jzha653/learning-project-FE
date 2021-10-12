export interface AppScreenOptions {
  hideHeader?: boolean; // if true, all header options are ignored. default: false
  title?: string; // will be overwritten by headerTitle if present
  closeButtonRoute?: string; // If present will add default close button that will navigate the specified route. Will be overwritten by headerRight if exists
  headerLeft?: React.ReactElement<any> | null; // add anything to the left size of header
  headerRight?: React.ReactElement<any> | null; // add anything to the right size of header
  headerTitle?: React.ReactElement<any> | null; // use only if need customized title. If you need text title only, specify "title" property instead
}

export default function AppScreen(props: AppScreenOptions) => {
    return()
}