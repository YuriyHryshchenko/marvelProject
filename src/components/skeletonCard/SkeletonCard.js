import "./skeleton.scss";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const SkeletonCard = () => {
	return (
		<SkeletonTheme baseColor="#C4C4C4" highlightColor="#fff">
			<div className="content-app__skeleton skeleton">
				<p className="skeleton__title">Please select a character to see information</p>
				<div className="skeleton__header header-skeleton">
					<div className="header-skeleton__circle">
						<Skeleton circle width={40} height={40}/>
					</div>
					<div className="header-skeleton__line">
						<Skeleton borderRadius={0} height={16}/>
					</div>
				</div>
				<div className="skeleton__main">
					<Skeleton style={{marginBottom: "15px"}} count={3} height={35} borderRadius={0}/>
				</div>
			</div>
		</SkeletonTheme>
	)
};

export default SkeletonCard;