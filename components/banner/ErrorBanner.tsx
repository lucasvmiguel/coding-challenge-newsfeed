import Banner from './Banner'

type Props = {
  message: string
}

export default function ErrorBanner({ message }: Props) {
  return (
    <Banner color="white" bgColor="#bc1a1b" data-test="error-banner">
      {message}
    </Banner>
  )
}
