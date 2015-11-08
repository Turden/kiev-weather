<<<<<<< HEAD
<<<zh


int P = 6;
int H = N / P;
int* A, *B, *E, *T, *t1, *t2, *t3;
int** MO, **MK, **MT, **MN, **test;
void vxm(int* res, int* v, int** MA, int p1, int p2)
{hgvj
	for (int i = p1; i < p2; i++)
	{
		res[i] = 0;
		for (int j = 0; j < N; j++)
		{
			res[i] += v[j] * MA[i][j];
		}
	}
}
void vxmandalfa(int* res, int* v, int** MA, int p1, int p2)
{
	int alfa = 1;
	for (int i = p1; i < p2; i++)
	{
		res[i] = 0;
		for (int j = 0; j < N; j++)
		{
			res[i] += v[j] * MA[i][j];
		}
		res[i] = res[i] * alfa;
	}
}
void mxm(int** res, int** mh, int** m, int p1, int p2)
{
	for (int k = p1; k < p2; k++)
	{
		for (int i = 0; i < N; i++)
		{
			res[k][i] = 0;
			for (int j = 0; j < N; j++)
			{
				res[k][i] = res[k][i] + mh[k][j] * m[j][i];
			}
		}
	}
}

void vminv(int* res, int* v1, int* v2)
{
	for (int i = 0; i < N; i++)
	{
		res[i] = 0;
		res[i] = v1[i] - v2[i];
	}
}
int** createMatrix()
{
	int** mb = new int*[N];
	for (int i = 0; i < N; i++)
	{
		mb[i] = new int[N];
		for (int j = 0; j < N; j++)
		{
			mb[i][j] = 1;
		}
	}
	return mb;
}
int* createVector()
{
	int* m = new int[N];
	for (int j = 0; j < N; j++)
	{
		m[j] = 1;
	}
	return m;
}
void copyM(int** sourse, int** des, int n)
{
	for (int i = 0; i < N; i++)
	{
		des[i] = new int[N];
		for (int j = 0; j < N; j++)
		{
			des[i][j] = sourse[i][j];
		}
	}
}
void copyV(int* sourse, int* des, int n)
{
	for (int j = 0; j < N; j++)
	{
		des[j] = sourse[j];
	}
}
void vectorout(int*A)
{
	cout << "Vector A" << (char)10 << (char)13;
	
	for (int i = 0; i < N; i++)
	{
		cout << " " << A[i];
	}
}
void calculation()
{
	omp_lock_t lock1, lock2;
	omp_init_lock(&lock1);
	omp_init_lock(&lock2);
	omp_set_num_threads(P);
	test = createMatrix();
	A = new int[N];
	t1 = new int[N];
	t2 = new int[N];
	t3 = new int[N];
#pragma omp parallel
	{
		int threadNumber = omp_get_thread_num();
		printf("Thread %d started\n", threadNumber);
		switch (threadNumber)
		{
		case 0: B = createVector();
			MO = createMatrix();
			MK = createMatrix();
			MT = createMatrix();
			MN = createMatrix();
			E = createVector();
			break;
		case 1: break;
		case 2: break;
		case 3: break;
		case 4: break;
		case 5: break;
		}
#pragma omp barrier
		int* Bx = new int[N];
		int* Ex = new int[N];
		int** MTx = new int*[N];		
		omp_set_lock(&lock1);
		copyV(B, Bx, N);
		copyV(E, Ex, N);
		copyM(MT, MTx, N);
		omp_unset_lock(&lock1);
		int p1 = threadNumber*H;
		int p2 = (threadNumber + 1)*H;
		if (threadNumber == P - 1)
		{
			p2 = N;
		}
		mxm(test, MK, MTx, p1, p2);
		vxm(t1, Bx, MO, p1, p2);
		vxmandalfa(t2, Ex, MN, p1, p2);
#pragma omp barrier
		int* t1x = new int[N];
		omp_set_lock(&lock2);
		copyV(t1, t1x,N);
		omp_unset_lock(&lock2);
		vxm(t3, t1x, test, p1, p2);
		vminv(A, t3, t2);
		printf("Thread %d finished\n", threadNumber);
	}
	vectorout(A);
}
int _tmain(int argc, _TCHAR* argv[])
{
	calculation();
	int a;
	cin >> a;
	return 0;
}
=======
<<<<<<< HEAD
# News&SpaceWeather
News-SpaceWeather

=======
# News-SpaceWeather
>>>>>>> parent of 134ba11... 
>>>>>>> parent of f28d27b... Update README.md
