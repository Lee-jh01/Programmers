package level1.test;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import level1.test.cases.DiviserCountPlusTest;
import level1.test.cases.FailureRateTest;
import level1.test.cases.TernaryFlipTest;

@RunWith(Suite.class)
@SuiteClasses({ FailureRateTest.class, DiviserCountPlusTest .class, TernaryFlipTest.class })
public class NovemberWeekOf3 {
	@AfterClass
	public static void clear() {
		System.gc();
	}
}
