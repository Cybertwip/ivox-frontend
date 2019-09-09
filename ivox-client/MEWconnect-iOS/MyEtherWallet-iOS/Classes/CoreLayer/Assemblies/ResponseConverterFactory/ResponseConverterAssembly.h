//
//  ResponseConverterAssembly.h
//  MyEtherWallet-iOS
//
//  Created by Mikhail Nikanorov on 21/05/2018.
//  Copyright © 2018 MyEtherWallet, Inc. All rights reserved.
//

@import Typhoon;
@import RamblerTyphoonUtils.AssemblyCollector;

#import "ResponseConverterFactory.h"

@interface ResponseConverterAssembly : TyphoonAssembly <ResponseConverterFactory, RamblerInitialAssembly>

@end