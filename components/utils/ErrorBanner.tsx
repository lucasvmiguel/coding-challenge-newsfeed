import Banner from './Banner'

type Props = {
  message: string;
}

export default function ErrorBanner({ message }: Props) {
  return (
    <Banner bgColor="#bc1a1a" color="white">
      {message}
    </Banner>
  )
}
