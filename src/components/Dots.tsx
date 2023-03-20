import React from "react";
import classNames from "classnames";

export interface DotsProps {
    className?: string;
}

export const Dots: React.FC<DotsProps> = (props) => {
    const styles = classNames('svg', props.className)
    return (
        <svg
            className={styles}
            viewBox="0 0 72 207"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path fill="#1E66F5" d="M2.77615 201.413C4.30586 201.413 5.55228 202.667 5.55228 204.207C5.55228 205.746 4.30585 207 2.77615 207C1.24644 207 1.53681e-05 205.746 1.55022e-05 204.207C1.56372e-05 202.658 1.24645 201.413 2.77615 201.413ZM1.69588e-05 187.493C1.68247e-05 189.032 1.24645 190.287 2.77615 190.287C4.30586 190.287 5.55229 189.032 5.55229 187.493C5.55229 185.954 4.30586 184.7 2.77615 184.7C1.24645 184.7 1.70938e-05 185.944 1.69588e-05 187.493ZM1.84154e-05 170.78C1.82813e-05 172.319 1.24645 173.573 2.77615 173.573C4.30586 173.573 5.55229 172.319 5.55229 170.78C5.55229 169.24 4.30586 167.986 2.77615 167.986C1.24645 167.977 1.85504e-05 169.231 1.84154e-05 170.78ZM1.98729e-05 154.057C1.97387e-05 155.596 1.24645 156.85 2.77615 156.85C4.30586 156.85 5.55229 155.596 5.55229 154.057C5.55229 152.518 4.30586 151.263 2.77615 151.263C1.24645 151.263 2.0007e-05 152.518 1.98729e-05 154.057ZM2.13294e-05 137.343C2.11953e-05 138.883 1.24645 140.137 2.77615 140.137C4.30586 140.137 5.55229 138.883 5.55229 137.343C5.55229 135.804 4.30586 134.55 2.77615 134.55C1.24645 134.55 2.14636e-05 135.804 2.13294e-05 137.343ZM16.6096 204.207C16.6096 205.746 17.856 207 19.3857 207C20.9154 207 22.1619 205.746 22.1619 204.207C22.1619 202.667 20.9154 201.413 19.3857 201.413C17.856 201.413 16.6096 202.658 16.6096 204.207ZM16.6096 187.493C16.6096 189.032 17.856 190.287 19.3857 190.287C20.9154 190.287 22.1619 189.032 22.1619 187.493C22.1619 185.954 20.9154 184.7 19.3857 184.7C17.856 184.7 16.6096 185.944 16.6096 187.493ZM16.6096 170.78C16.6096 172.319 17.856 173.573 19.3857 173.573C20.9155 173.573 22.1619 172.319 22.1619 170.78C22.1619 169.24 20.9155 167.986 19.3857 167.986C17.856 167.977 16.6096 169.231 16.6096 170.78ZM16.6096 154.057C16.6096 155.596 17.856 156.85 19.3858 156.85C20.9155 156.85 22.1619 155.596 22.1619 154.057C22.1619 152.518 20.9155 151.263 19.3858 151.263C17.856 151.263 16.6096 152.518 16.6096 154.057ZM16.6096 137.343C16.6096 138.883 17.856 140.137 19.3858 140.137C20.9155 140.137 22.1619 138.883 22.1619 137.343C22.1619 135.804 20.9155 134.55 19.3858 134.55C17.856 134.55 16.6096 135.804 16.6096 137.343ZM33.2286 204.207C33.2286 205.746 34.475 207 36.0047 207C37.5344 207 38.7809 205.746 38.7809 204.207C38.7809 202.667 37.5344 201.413 36.0047 201.413C34.4656 201.413 33.2286 202.658 33.2286 204.207ZM33.2286 187.493C33.2286 189.032 34.475 190.287 36.0047 190.287C37.5344 190.287 38.7809 189.032 38.7809 187.493C38.7809 185.954 37.5344 184.7 36.0047 184.7C34.4656 184.7 33.2286 185.944 33.2286 187.493ZM33.2286 170.78C33.2286 172.319 34.475 173.573 36.0047 173.573C37.5344 173.573 38.7809 172.319 38.7809 170.78C38.7809 169.24 37.5344 167.986 36.0047 167.986C34.4656 167.977 33.2286 169.231 33.2286 170.78ZM33.2286 154.057C33.2286 155.596 34.475 156.85 36.0047 156.85C37.5344 156.85 38.7809 155.596 38.7809 154.057C38.7809 152.518 37.5344 151.263 36.0047 151.263C34.4656 151.263 33.2286 152.518 33.2286 154.057ZM33.2286 137.343C33.2286 138.883 34.475 140.137 36.0047 140.137C37.5344 140.137 38.7809 138.883 38.7809 137.343C38.7809 135.804 37.5344 134.55 36.0047 134.55C34.4656 134.55 33.2286 135.804 33.2286 137.343ZM49.8382 204.207C49.8382 205.746 51.0846 207 52.6143 207C54.144 207 55.3904 205.746 55.3904 204.207C55.3904 202.667 54.144 201.413 52.6143 201.413C51.0752 201.413 49.8382 202.658 49.8382 204.207ZM49.8382 187.493C49.8382 189.032 51.0846 190.287 52.6143 190.287C54.144 190.287 55.3904 189.032 55.3904 187.493C55.3904 185.954 54.144 184.7 52.6143 184.7C51.0752 184.7 49.8382 185.944 49.8382 187.493ZM49.8382 170.78C49.8382 172.319 51.0846 173.573 52.6143 173.573C54.144 173.573 55.3904 172.319 55.3904 170.78C55.3904 169.24 54.144 167.986 52.6143 167.986C51.0752 167.977 49.8382 169.231 49.8382 170.78ZM49.8382 154.057C49.8382 155.596 51.0846 156.85 52.6143 156.85C54.144 156.85 55.3904 155.596 55.3904 154.057C55.3904 152.518 54.144 151.263 52.6143 151.263C51.0752 151.263 49.8382 152.518 49.8382 154.057ZM49.8382 137.343C49.8382 138.883 51.0846 140.137 52.6143 140.137C54.144 140.137 55.3904 138.883 55.3904 137.343C55.3904 135.804 54.144 134.55 52.6143 134.55C51.0752 134.55 49.8382 135.804 49.8382 137.343ZM66.4477 204.207C66.4477 205.746 67.6942 207 69.2239 207C70.7536 207 72 205.746 72 204.207C72 202.667 70.7536 201.413 69.2239 201.413C67.6942 201.413 66.4477 202.658 66.4477 204.207ZM66.4477 187.493C66.4477 189.032 67.6942 190.287 69.2239 190.287C70.7536 190.287 72 189.032 72 187.493C72 185.954 70.7536 184.7 69.2239 184.7C67.6942 184.7 66.4477 185.944 66.4477 187.493ZM66.4477 170.78C66.4477 172.319 67.6942 173.573 69.2239 173.573C70.7536 173.573 72 172.319 72 170.78C72 169.24 70.7536 167.986 69.2239 167.986C67.6942 167.986 66.4477 169.231 66.4477 170.78ZM66.4477 154.057C66.4477 155.596 67.6942 156.85 69.2239 156.85C70.7536 156.85 72 155.596 72 154.057C72 152.518 70.7536 151.263 69.2239 151.263C67.6942 151.263 66.4477 152.518 66.4477 154.057ZM66.4477 137.343C66.4477 138.883 67.6942 140.137 69.2239 140.137C70.7536 140.137 72 138.883 72 137.343C72 135.804 70.7536 134.55 69.2239 134.55C67.6942 134.55 66.4477 135.804 66.4477 137.343Z"/>
            <path fill="#1E66F5" d="M2.77615 134.138C4.30586 134.138 5.55228 135.392 5.55228 136.932C5.55228 138.471 4.30585 139.725 2.77615 139.725C1.24644 139.725 1.53681e-05 138.471 1.55022e-05 136.932C1.56372e-05 135.383 1.24645 134.138 2.77615 134.138ZM1.69588e-05 120.218C1.68247e-05 121.757 1.24645 123.012 2.77615 123.012C4.30586 123.012 5.55229 121.757 5.55229 120.218C5.55229 118.679 4.30586 117.425 2.77615 117.425C1.24645 117.425 1.70938e-05 118.669 1.69588e-05 120.218ZM1.84154e-05 103.505C1.82813e-05 105.044 1.24645 106.298 2.77615 106.298C4.30586 106.298 5.55229 105.044 5.55229 103.505C5.55229 101.965 4.30586 100.711 2.77615 100.711C1.24645 100.702 1.85504e-05 101.956 1.84154e-05 103.505ZM1.98729e-05 86.7819C1.97387e-05 88.3211 1.24645 89.5753 2.77615 89.5753C4.30586 89.5753 5.55229 88.3211 5.55229 86.7819C5.55229 85.2426 4.30586 83.9884 2.77615 83.9884C1.24645 83.9884 2.0007e-05 85.2426 1.98729e-05 86.7819ZM2.13294e-05 70.0685C2.11953e-05 71.6077 1.24645 72.862 2.77615 72.862C4.30586 72.862 5.55229 71.6077 5.55229 70.0685C5.55229 68.5292 4.30586 67.275 2.77615 67.275C1.24645 67.275 2.14636e-05 68.5292 2.13294e-05 70.0685ZM16.6096 136.932C16.6096 138.471 17.856 139.725 19.3857 139.725C20.9154 139.725 22.1619 138.471 22.1619 136.932C22.1619 135.392 20.9154 134.138 19.3857 134.138C17.856 134.138 16.6096 135.383 16.6096 136.932ZM16.6096 120.218C16.6096 121.757 17.856 123.012 19.3857 123.012C20.9154 123.012 22.1619 121.757 22.1619 120.218C22.1619 118.679 20.9154 117.425 19.3857 117.425C17.856 117.425 16.6096 118.669 16.6096 120.218ZM16.6096 103.505C16.6096 105.044 17.856 106.298 19.3857 106.298C20.9155 106.298 22.1619 105.044 22.1619 103.505C22.1619 101.965 20.9155 100.711 19.3857 100.711C17.856 100.702 16.6096 101.956 16.6096 103.505ZM16.6096 86.7819C16.6096 88.3211 17.856 89.5753 19.3858 89.5753C20.9155 89.5753 22.1619 88.3211 22.1619 86.7819C22.1619 85.2426 20.9155 83.9884 19.3858 83.9884C17.856 83.9884 16.6096 85.2426 16.6096 86.7819ZM16.6096 70.0685C16.6096 71.6077 17.856 72.862 19.3858 72.862C20.9155 72.862 22.1619 71.6077 22.1619 70.0685C22.1619 68.5292 20.9155 67.275 19.3858 67.275C17.856 67.275 16.6096 68.5292 16.6096 70.0685ZM33.2286 136.932C33.2286 138.471 34.475 139.725 36.0047 139.725C37.5344 139.725 38.7809 138.471 38.7809 136.932C38.7809 135.392 37.5344 134.138 36.0047 134.138C34.4656 134.138 33.2286 135.383 33.2286 136.932ZM33.2286 120.218C33.2286 121.757 34.475 123.012 36.0047 123.012C37.5344 123.012 38.7809 121.757 38.7809 120.218C38.7809 118.679 37.5344 117.425 36.0047 117.425C34.4656 117.425 33.2286 118.669 33.2286 120.218ZM33.2286 103.505C33.2286 105.044 34.475 106.298 36.0047 106.298C37.5344 106.298 38.7809 105.044 38.7809 103.505C38.7809 101.965 37.5344 100.711 36.0047 100.711C34.4656 100.702 33.2286 101.956 33.2286 103.505ZM33.2286 86.7819C33.2286 88.3211 34.475 89.5753 36.0047 89.5753C37.5344 89.5753 38.7809 88.3211 38.7809 86.7819C38.7809 85.2426 37.5344 83.9884 36.0047 83.9884C34.4656 83.9884 33.2286 85.2426 33.2286 86.7819ZM33.2286 70.0685C33.2286 71.6077 34.475 72.862 36.0047 72.862C37.5344 72.862 38.7809 71.6077 38.7809 70.0685C38.7809 68.5292 37.5344 67.275 36.0047 67.275C34.4656 67.275 33.2286 68.5292 33.2286 70.0685ZM49.8382 136.932C49.8382 138.471 51.0846 139.725 52.6143 139.725C54.144 139.725 55.3904 138.471 55.3904 136.932C55.3904 135.392 54.144 134.138 52.6143 134.138C51.0752 134.138 49.8382 135.383 49.8382 136.932ZM49.8382 120.218C49.8382 121.757 51.0846 123.012 52.6143 123.012C54.144 123.012 55.3904 121.757 55.3904 120.218C55.3904 118.679 54.144 117.425 52.6143 117.425C51.0752 117.425 49.8382 118.669 49.8382 120.218ZM49.8382 103.505C49.8382 105.044 51.0846 106.298 52.6143 106.298C54.144 106.298 55.3904 105.044 55.3904 103.505C55.3904 101.965 54.144 100.711 52.6143 100.711C51.0752 100.702 49.8382 101.956 49.8382 103.505ZM49.8382 86.7819C49.8382 88.3211 51.0846 89.5753 52.6143 89.5753C54.144 89.5753 55.3904 88.3211 55.3904 86.7819C55.3904 85.2426 54.144 83.9884 52.6143 83.9884C51.0752 83.9884 49.8382 85.2426 49.8382 86.7819ZM49.8382 70.0685C49.8382 71.6077 51.0846 72.862 52.6143 72.862C54.144 72.862 55.3904 71.6077 55.3904 70.0685C55.3904 68.5292 54.144 67.275 52.6143 67.275C51.0752 67.275 49.8382 68.5292 49.8382 70.0685ZM66.4477 136.932C66.4477 138.471 67.6942 139.725 69.2239 139.725C70.7536 139.725 72 138.471 72 136.932C72 135.392 70.7536 134.138 69.2239 134.138C67.6942 134.138 66.4477 135.383 66.4477 136.932ZM66.4477 120.218C66.4477 121.757 67.6942 123.012 69.2239 123.012C70.7536 123.012 72 121.757 72 120.218C72 118.679 70.7536 117.425 69.2239 117.425C67.6942 117.425 66.4477 118.669 66.4477 120.218ZM66.4477 103.505C66.4477 105.044 67.6942 106.298 69.2239 106.298C70.7536 106.298 72 105.044 72 103.505C72 101.965 70.7536 100.711 69.2239 100.711C67.6942 100.711 66.4477 101.956 66.4477 103.505ZM66.4477 86.7819C66.4477 88.3211 67.6942 89.5753 69.2239 89.5753C70.7536 89.5753 72 88.3211 72 86.7819C72 85.2426 70.7536 83.9884 69.2239 83.9884C67.6942 83.9884 66.4477 85.2426 66.4477 86.7819ZM66.4477 70.0685C66.4477 71.6077 67.6942 72.862 69.2239 72.862C70.7536 72.862 72 71.6077 72 70.0685C72 68.5292 70.7536 67.275 69.2239 67.275C67.6942 67.275 66.4477 68.5292 66.4477 70.0685Z"/>
            <path fill="#1E66F5" d="M2.77615 66.863C4.30586 66.863 5.55228 68.1172 5.55228 69.6565C5.55228 71.1958 4.30585 72.45 2.77615 72.45C1.24644 72.45 1.53681e-05 71.1958 1.55022e-05 69.6565C1.56372e-05 68.1077 1.24645 66.863 2.77615 66.863ZM1.69588e-05 52.9431C1.68247e-05 54.4824 1.24645 55.7366 2.77615 55.7366C4.30586 55.7366 5.55229 54.4824 5.55229 52.9431C5.55229 51.4039 4.30586 50.1496 2.77615 50.1496C1.24645 50.1496 1.70938e-05 51.3944 1.69588e-05 52.9431ZM1.84154e-05 36.2297C1.82813e-05 37.769 1.24645 39.0232 2.77615 39.0232C4.30586 39.0232 5.55229 37.769 5.55229 36.2297C5.55229 34.6905 4.30586 33.4363 2.77615 33.4363C1.24645 33.4268 1.85504e-05 34.681 1.84154e-05 36.2297ZM1.98729e-05 19.5069C1.97387e-05 21.0461 1.24645 22.3003 2.77615 22.3003C4.30586 22.3003 5.55229 21.0461 5.55229 19.5069C5.55229 17.9676 4.30586 16.7134 2.77615 16.7134C1.24645 16.7134 2.0007e-05 17.9676 1.98729e-05 19.5069ZM2.13294e-05 2.79348C2.11953e-05 4.33274 1.24645 5.58697 2.77615 5.58697C4.30586 5.58697 5.55229 4.33274 5.55229 2.79348C5.55229 1.25421 4.30586 -5.9365e-06 2.77615 -6.07065e-06C1.24645 -6.2048e-06 2.14636e-05 1.25421 2.13294e-05 2.79348ZM16.6096 69.6565C16.6096 71.1958 17.856 72.45 19.3857 72.45C20.9154 72.45 22.1619 71.1958 22.1619 69.6565C22.1619 68.1172 20.9154 66.863 19.3857 66.863C17.856 66.863 16.6096 68.1077 16.6096 69.6565ZM16.6096 52.9431C16.6096 54.4824 17.856 55.7366 19.3857 55.7366C20.9154 55.7366 22.1619 54.4824 22.1619 52.9431C22.1619 51.4039 20.9154 50.1496 19.3857 50.1496C17.856 50.1496 16.6096 51.3944 16.6096 52.9431ZM16.6096 36.2297C16.6096 37.769 17.856 39.0232 19.3857 39.0232C20.9155 39.0232 22.1619 37.769 22.1619 36.2297C22.1619 34.6905 20.9155 33.4363 19.3857 33.4363C17.856 33.4268 16.6096 34.681 16.6096 36.2297ZM16.6096 19.5069C16.6096 21.0461 17.856 22.3003 19.3857 22.3003C20.9155 22.3003 22.1619 21.0461 22.1619 19.5069C22.1619 17.9676 20.9155 16.7134 19.3857 16.7134C17.856 16.7134 16.6096 17.9676 16.6096 19.5069ZM16.6096 2.79348C16.6096 4.33274 17.856 5.58697 19.3857 5.58697C20.9155 5.58697 22.1619 4.33274 22.1619 2.79348C22.1619 1.25421 20.9155 -4.47991e-06 19.3857 -4.61406e-06C17.856 -4.74821e-06 16.6096 1.25421 16.6096 2.79348ZM33.2286 69.6565C33.2286 71.1958 34.475 72.45 36.0047 72.45C37.5344 72.45 38.7809 71.1958 38.7809 69.6565C38.7809 68.1172 37.5344 66.863 36.0047 66.863C34.4656 66.863 33.2286 68.1077 33.2286 69.6565ZM33.2286 52.9431C33.2286 54.4824 34.475 55.7366 36.0047 55.7366C37.5344 55.7366 38.7809 54.4824 38.7809 52.9431C38.7809 51.4039 37.5344 50.1496 36.0047 50.1496C34.4656 50.1496 33.2286 51.3944 33.2286 52.9431ZM33.2286 36.2297C33.2286 37.769 34.475 39.0232 36.0047 39.0232C37.5344 39.0232 38.7809 37.769 38.7809 36.2297C38.7809 34.6905 37.5344 33.4363 36.0047 33.4363C34.4656 33.4268 33.2286 34.681 33.2286 36.2297ZM33.2286 19.5069C33.2286 21.0461 34.475 22.3003 36.0047 22.3003C37.5344 22.3003 38.7809 21.0461 38.7809 19.5069C38.7809 17.9676 37.5344 16.7134 36.0047 16.7134C34.4656 16.7134 33.2286 17.9676 33.2286 19.5069ZM33.2286 2.79348C33.2286 4.33275 34.475 5.58697 36.0047 5.58697C37.5344 5.58697 38.7809 4.33275 38.7809 2.79348C38.7809 1.25422 37.5344 -3.02249e-06 36.0047 -3.15664e-06C34.4656 -3.29162e-06 33.2286 1.25422 33.2286 2.79348ZM49.8382 69.6565C49.8382 71.1958 51.0846 72.45 52.6143 72.45C54.144 72.45 55.3904 71.1958 55.3904 69.6565C55.3904 68.1172 54.144 66.863 52.6143 66.863C51.0752 66.863 49.8382 68.1077 49.8382 69.6565ZM49.8382 52.9431C49.8382 54.4824 51.0846 55.7366 52.6143 55.7366C54.144 55.7366 55.3904 54.4824 55.3904 52.9431C55.3904 51.4039 54.144 50.1496 52.6143 50.1496C51.0752 50.1496 49.8382 51.3944 49.8382 52.9431ZM49.8382 36.2297C49.8382 37.769 51.0846 39.0232 52.6143 39.0232C54.144 39.0232 55.3904 37.769 55.3904 36.2297C55.3904 34.6905 54.144 33.4363 52.6143 33.4363C51.0752 33.4268 49.8382 34.681 49.8382 36.2297ZM49.8382 19.5069C49.8382 21.0461 51.0846 22.3003 52.6143 22.3003C54.144 22.3003 55.3904 21.0461 55.3904 19.5069C55.3904 17.9676 54.144 16.7134 52.6143 16.7134C51.0752 16.7134 49.8382 17.9676 49.8382 19.5069ZM49.8382 2.79349C49.8382 4.33275 51.0846 5.58697 52.6143 5.58697C54.144 5.58697 55.3904 4.33275 55.3904 2.79349C55.3904 1.25422 54.144 -1.5659e-06 52.6143 -1.70005e-06C51.0752 -1.83502e-06 49.8382 1.25422 49.8382 2.79349ZM66.4477 69.6565C66.4477 71.1958 67.6942 72.45 69.2239 72.45C70.7536 72.45 72 71.1958 72 69.6565C72 68.1172 70.7536 66.863 69.2239 66.863C67.6942 66.863 66.4477 68.1077 66.4477 69.6565ZM66.4477 52.9431C66.4477 54.4824 67.6942 55.7366 69.2239 55.7366C70.7536 55.7366 72 54.4824 72 52.9431C72 51.4039 70.7536 50.1496 69.2239 50.1496C67.6942 50.1496 66.4477 51.3944 66.4477 52.9431ZM66.4477 36.2297C66.4477 37.769 67.6942 39.0232 69.2239 39.0232C70.7536 39.0232 72 37.769 72 36.2297C72 34.6905 70.7536 33.4363 69.2239 33.4363C67.6942 33.4363 66.4477 34.681 66.4477 36.2297ZM66.4477 19.5069C66.4477 21.0461 67.6942 22.3003 69.2239 22.3003C70.7536 22.3003 72 21.0461 72 19.5069C72 17.9676 70.7536 16.7134 69.2239 16.7134C67.6942 16.7134 66.4477 17.9676 66.4477 19.5069ZM66.4477 2.79349C66.4477 4.33275 67.6942 5.58697 69.2239 5.58697C70.7536 5.58697 72 4.33275 72 2.79349C72 1.25422 70.7536 -1.09307e-07 69.2239 -2.43456e-07C67.6942 -3.77605e-07 66.4477 1.25422 66.4477 2.79349Z"/>
        </svg>
    );
}
