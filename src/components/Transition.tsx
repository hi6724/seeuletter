'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useContext, useRef } from 'react';

// Prevents instant page opening
function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  return <LayoutRouterContext.Provider value={frozen}>{props.children}</LayoutRouterContext.Provider>;
}

export default function Transition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const uuid = typeof window !== 'undefined' ? (localStorage.getItem('uuid') as string) : '';

  useEffect(() => {
    const invitationId = pathname.includes('invitation') ? pathname.split('/')[2] : null;
    if (!invitationId && !uuid && pathname !== '/auth/sign-up' && pathname !== '/auth/sign-in') {
      router.push('/auth/sign-up');
      return;
    }
    if (uuid && (pathname === '/auth/sign-up' || pathname === '/auth/sign-in')) {
      router.replace('/main');
    }
  }, [uuid]);

  return (
    <>
      <AnimatePresence mode={'wait'} initial={false}>
        <motion.div
          key={pathname}
          initial={{ x: '-100%', opacity: 0 }} // 왼쪽에서 시작
          animate={{ x: '0%', opacity: 1 }} // 화면 중앙으로 이동
          exit={{ x: '100%', opacity: 0.5 }} // 오른쪽으로 사라짐
          transition={{
            duration: 0.2, // 애니메이션 지속 시간
          }}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute', // 중첩된 페이지들을 겹치게 배치
            top: 0,
            left: 0,
          }}
        >
          <FrozenRouter>{children}</FrozenRouter>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
