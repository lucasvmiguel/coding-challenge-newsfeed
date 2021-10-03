/* eslint-disable @next/next/no-html-link-for-pages */

export default function UserTypeChanger() {
  return (
    <>
      <h2>
        See feed as:
      </h2>
      <ul>
        <li>
          <a href='/?user_type=founders'>
            Founder
          </a>
        </li>
        <li>
          <a href='/?user_type=angels'>
            Angel
          </a>
        </li>
        <li>
          <a href='/?user_type=writers'>
            Writer
          </a>
        </li>
      </ul>
    </>
  )
}
