import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserInfo } from "../components/UserInfo";

export function Home() {
  return (
    <section>
      <header>
        <h1>React Design Patterns</h1>
      </header>
			<div>
				<CurrentUserLoader>
					<UserInfo />
				</CurrentUserLoader>
			</div>
    </section>
  );
}
