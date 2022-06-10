import	React, {ReactElement}	from	'react';
import	Link					from	'next/link';
import	{Card, Button}			from	'@yearn-finance/web-lib/components';
import	WithShadow				from	'components/WithShadow';

function	DisclaimerPage(): ReactElement {
	return (
		<div className={'flex items-center h-full'}>
			<WithShadow role={'large'}>
				<Card className={'flex flex-col justify-between w-[600px] h-[500px]'}>
					<div className={'w-full'}>
						<div className={'pb-6 w-full'}>
							<h2 className={'font-bold'}>{'You are keeping'}</h2>
							<h2 className={'font-bold'}>{'24.6913578 ETH'}</h2>
						</div>
						<div className={'space-y-6 w-full text-justify'}>
							<p>
								{'How much of it do you wanna swap to USDC?'}
							</p>
						</div>
					</div>
					<div className={'flex justify-start'}>
						<Link href={'/wrap-eth'}>
							<div>
								<WithShadow role={'button'}>
									<Button className={'w-[176px]'}>
										{'Tap'}
									</Button>
								</WithShadow>
							</div>
						</Link>
					</div>
				</Card>
			</WithShadow>
		</div>
	);
}

export default DisclaimerPage;